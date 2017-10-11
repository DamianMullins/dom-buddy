import { getHtml, setHtml, setBodyHtml } from '../src/html';

beforeEach(() => {
    document.body.innerHTML = '';
});

describe('getHtml()', () => {

    it('returns empty string if `null` is passed', () => {
        // Arrange
        const element = null;

        // Act
        const result = getHtml(element);

        // Assert
        expect(result).toBe('');
    });

    it('returns empty string if `undefined` is passed', () => {
        // Arrange
        const element = undefined;

        // Act
        const result = getHtml(element);

        // Assert
        expect(result).toBe('');
    });

    it('returns html from the document body by default', () => {
        // Arrange
        const html = '<h1>Heading</h1>';
        document.body.innerHTML = html;

        // Act
        const result = getHtml();

        // Assert
        expect(result).toBe(html);
    });

    it('returns html from specified element', () => {
        // Arrange
        const headingText = '<span>Heading</span>';
        const html = `<h1>${headingText}</h1>`;
        document.body.innerHTML = html;
        const element = document.querySelector('h1');

        // Act
        const result = getHtml(element);

        // Assert
        expect(result).toBe(headingText);
    });

});

describe('setHtml()', () => {

    it('does not set html if `null` element is passed', () => {
        // Arrange
        const element = null;
        const html = '<h1>Heading</h1>';

        // Act
        setHtml(element, html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('does not set html if `undefined` element is passed', () => {
        // Arrange
        const element = undefined;
        const html = '<h1>Heading</h1>';

        // Act
        setHtml(element, html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('does not set html if `null` html is passed', () => {
        // Arrange
        const element = document.body;
        const html = null;

        // Act
        setHtml(element, html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('does not set html if `undefined` html is passed', () => {
        // Arrange
        const element = document.body;
        const html = undefined;

        // Act
        setHtml(element, html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('sets the document body html', () => {
        // Arrange
        const element = document.body;
        const html = '<h1>Heading</h1>';

        // Act
        setHtml(element, html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('sets element html', () => {
        // Arrange
        document.body.innerHTML = '<h1>Welcome</h1>';
        const element = document.querySelector('h1');
        const html = '<span>Heading</span>';

        // Act
        setHtml(element, html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

});

describe('setBodyHtml()', () => {

    it('does not set document body html if `null` is passed', () => {
        // Arrange
        const html = null;

        // Act
        setBodyHtml(html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('does not set document body html if `undefined` is passed', () => {
        // Arrange
        const html = undefined;

        // Act
        setBodyHtml(html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('sets document body html', () => {
        // Arrange
        const html = '<h1>Heading</h1>';

        // Act
        setBodyHtml(html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

});
