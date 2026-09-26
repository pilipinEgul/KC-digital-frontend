import 'server-only';
import { createHmac, randomUUID } from 'node:crypto';

/**
 * Server-only signed API client for the KC backend.
 *
 * The HMAC secret (KC_API_SECRET) must NEVER reach the browser, so this module
 * imports `server-only` — any accidental client import fails the build. Call it
 * from Server Actions or Route Handlers acting as a BFF in front of Laravel.
 *
 * Signature contract (mirrors backend/app/Modules/Shared/Http/Middleware/VerifySignature):
 *   canonical = METHOD \n PATH \n TIMESTAMP \n NONCE \n CANONICAL_JSON_BODY
 *   X-Signature = HMAC_SHA256(canonical, KC_API_SECRET)  (hex)
 */

const API_BASE = process.env.KC_API_URL ?? 'http://localhost:8080';
const API_KEY = process.env.KC_API_KEY ?? '';
const API_SECRET = process.env.KC_API_SECRET ?? '';

/**
 * Deterministic JSON so the client and server hash identical bytes.
 * Keys are sorted recursively; whitespace is stripped.
 */
export function canonicalJson(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(',')}]`;
  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([, v]) => v !== undefined)
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([k, v]) => `${JSON.stringify(k)}:${canonicalJson(v)}`);
  return `{${entries.join(',')}}`;
}

function sign(method: string, path: string, timestamp: string, nonce: string, body: string) {
  const canonical = [method.toUpperCase(), path, timestamp, nonce, body].join('\n');
  return createHmac('sha256', API_SECRET).update(canonical).digest('hex');
}

interface SignedRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string; // e.g. "/api/v1/brands"
  body?: unknown;
  headers?: Record<string, string>;
}

export async function signedFetch<T>({
  method = 'GET',
  path,
  body,
  headers = {},
}: SignedRequestOptions): Promise<T> {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = randomUUID();
  const canonicalBody = body === undefined ? '' : canonicalJson(body);
  const signature = sign(method, path, timestamp, nonce, canonicalBody);

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-API-Key': API_KEY,
      'X-Timestamp': timestamp,
      'X-Nonce': nonce,
      'X-Signature': signature,
      ...headers,
    },
    body: body === undefined ? undefined : canonicalBody,
    cache: 'no-store',
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`KC API ${method} ${path} failed: ${res.status} ${detail}`);
  }
  return res.json() as Promise<T>;
}
