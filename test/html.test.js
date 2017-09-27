import { getHtml, setHtml, setBodyHtml } from '../src/html';


describe('getHtml()', () => {

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
        const headingText = 'Heading';
        const html = `<main>
                          <h1>${headingText}</h1>
                      </main>`;
        document.body.innerHTML = html;
        const heading = document.querySelector('h1');

        // Act
        const result = getHtml(heading);

        // Assert
        expect(result).toBe(headingText);
    });

});

describe('setHtml()', () => {

    it('sets the document body html', () => {
        // Arrange
        const html = '<h1>Heading</h1>';

        // Act
        setHtml(document.body, html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('sets element html', () => {
        // Arrange
        const headingText = 'Heading';
        const html = `<main>
                          <h1>Welcome</h1>
                      </main>`;
        document.body.innerHTML = html;
        const heading = document.querySelector('h1');

        // Act
        setHtml(heading, headingText);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

});

describe('setBodyHtml()', () => {

    it('sets the document body html', () => {
        // Arrange
        const html = '<h1>Heading</h1>';

        // Act
        setBodyHtml(html);

        // Assert
        expect(document.body.innerHTML).toMatchSnapshot();
    });

});
