let tokenStore: Record<string, unknown> = {};

export function saveOutlookToken(token: unknown) {
  tokenStore.outlook = token;
  return tokenStore.outlook;
}

export function getOutlookToken() {
  return tokenStore.outlook ?? null;
}
