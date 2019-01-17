import { getCookieValue, setCookieValue } from '../src/cookies';

beforeEach(() => {
    document.cookie = '';
});

describe('getCookieValue()', () => {
    it('returns a string value if there is a cookie', () => {
        // Arrange
        const cookie = 'MyCookie=foo';
        setCookieValue(cookie);

        // Act
        const result = getCookieValue();

        // Assert
        expect(result).toBe(`; ${cookie}`);
    });
});
