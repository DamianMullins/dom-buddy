import { getCookieValue, setCookieValue } from '../src/cookies';

beforeEach(() => {
    document.cookie = '';
});

describe('getCookieValue()', () => {
    it('returns a string value if there is a cookie', () => {
        // Arrange
        const cookie = 'MyCookie=foo';
        document.cookie = cookie;

        // Act
        const result = getCookieValue();

        // Assert
        expect(result).toBe(`; ${cookie}`);
    });
});

describe('setCookieValue()', () => {
    it('sets the cookie value', () => {
        // Arrange
        const cookie = 'MyCookie=foo';

        // Act
        setCookieValue(cookie);

        // Assert
        expect(document.cookie).toBe(`; ${cookie}`);
    });
});
