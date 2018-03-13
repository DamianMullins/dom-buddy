import { dispatchEvent } from '../src/events';

describe('dispatchEvent()', () => {
    it('throws if element is `null`', () => {
        // Arrange
        const element = null;

        // Act & Assert
        expect(() => dispatchEvent(element)).toThrow();
    });

    it('element defaults to `document` if element is `undefined`', () => {
        // Arrange
        const element = undefined;

        // Act
        const result = dispatchEvent(element);

        // Assert
        expect(result.target).toBe(document);
    });

    it('sets `event.type` to "null" if type is `null`', () => {
        // Arrange
        const element = document;
        const type = null;

        // Act
        const result = dispatchEvent(element, type);

        // Assert
        expect(result.type).toBe('null');
    });

    it('sets `event.type` to "undefined" if type is `null`', () => {
        // Arrange
        const element = document;
        const type = undefined;

        // Act
        const result = dispatchEvent(element, type);

        // Assert
        expect(result.type).toBe('undefined');
    });

    it('event is correct type', () => {
        // Arrange
        document.body.innerHTML = '<button></button>';
        const element = document.querySelector('button');
        const type = 'test';

        // Act
        const result = dispatchEvent(element, type);

        // Assert
        expect(result instanceof Event).toBe(true);
    });

    it('target is set correctly', () => {
        // Arrange
        document.body.innerHTML = '<button></button>';
        const element = document.querySelector('button');
        const type = 'test';

        // Act
        const result = dispatchEvent(element, type);

        // Assert
        expect(result.target).toBe(element);
    });

    it('type is set correctly', () => {
        // Arrange
        document.body.innerHTML = '<button></button>';
        const element = document.querySelector('button');
        const type = 'test';

        // Act
        const result = dispatchEvent(element, type);

        // Assert
        expect(result.type).toBe(type);
    });

    it('event is correct type when detail is `null`', () => {
        // Arrange
        document.body.innerHTML = '<button></button>';
        const element = document.querySelector('button');
        const type = 'test';
        const detail = null;

        // Act
        const result = dispatchEvent(element, type, detail);

        // Assert
        expect(result instanceof Event).toBe(true);
    });

    it('event is correct type when detail is `undefined`', () => {
        // Arrange
        document.body.innerHTML = '<button></button>';
        const element = document.querySelector('button');
        const type = 'test';
        const detail = undefined;

        // Act
        const result = dispatchEvent(element, type, detail);

        // Assert
        expect(result instanceof Event).toBe(true);
    });

    it('event is custom event when detail is set', () => {
        // Arrange
        document.body.innerHTML = '<button></button>';
        const element = document.querySelector('button');
        const type = 'test';
        const detail = {};

        // Act
        const result = dispatchEvent(element, type, detail);

        // Assert
        expect(result instanceof CustomEvent).toBe(true);
    });

    it('detail is set correctly for custom event', () => {
        // Arrange
        document.body.innerHTML = '<button></button>';
        const element = document.querySelector('button');
        const type = 'test';
        const detail = { test: '💎' };

        // Act
        const result = dispatchEvent(element, type, detail);

        // Assert
        expect(result.detail).toEqual(detail);
    });
});
