import { isWhitelistedForChogRpc } from './zerion-rpc-whitelist';

test('isWhitelistedForChogRpc', () => {
  expect(isWhitelistedForChogRpc('https://safe.global')).toBe(true);
  expect(isWhitelistedForChogRpc('https://app.safe.global')).toBe(true);

  expect(isWhitelistedForChogRpc('https://app.uniswap.org')).toBe(false);
  expect(isWhitelistedForChogRpc('https://notsafe.global')).toBe(false);
  expect(isWhitelistedForChogRpc('https://safe.global.evil.com')).toBe(false);

  expect(isWhitelistedForChogRpc(undefined)).toBe(false);
  expect(isWhitelistedForChogRpc('')).toBe(false);
  expect(isWhitelistedForChogRpc('not-a-url')).toBe(false);
});
