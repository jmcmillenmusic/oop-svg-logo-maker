function generateShape(data) {

    // Creates the Shape class which contains the width, height, and XML Namespace (xmlns) for all shapes and sets up the canvas to  receive the logo
    class Shape {
        constructor(width, height, xmlns) {
            this.width = width;
            this.height = height;
            this.xmlns = xmlns;
        }

        renderShape() {
            return `<svg width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">
        `;
        }
    }

    // Creates the Circle class which is a child of the Shape class that also contains coordinates for its center, its radius, and a fill color (chosen by user)
    class Circle extends Shape {
        constructor(width, height, xmlns, centerX, centerY, radius, fill) {
            super(width, height, xmlns);
            this.centerX = centerX;
            this.centerY = centerY;
            this.radius = radius;
            this.fill = fill;
        }

        renderCircle() {
            return `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${data.shapeColor}"/>
        `;
        }
    }

    // Creates the Triangle class which is a child of the Shape class that also contains coordinates for each of its points and a fill color (chosen by user)
    class Triangle extends Shape {
        constructor(width, height, xmlns, points, fill) {
            super(width, height, xmlns);
            this.points = points;
            this.fill = fill;
        }

        renderTriangle() {
            return `<polygon points="${this.points}" fill="${data.shapeColor}"/>
        `;
        }
    }

    // Creates the Square class which is a child of the Shape class that also contains coordinates for its starting (top-left) X and Y coordinates, its width and height, and a fill color (chosen by user)
    class Square extends Shape {
        constructor(width, height, xmlns, startX, startY, rectWidth, rectHeight, fill) {
            super(width, height, xmlns);
            this.startX = startX;
            this.startY = startY;
            this.rectWidth = rectWidth;
            this.rectHeight = rectHeight;
            this.fill = fill;
        }

        renderSquare() {
            return `<rect x="${this.startX}" y="${this.startY}" width="${this.rectWidth}" height="${this.rectHeight}" fill="${data.shapeColor}"/>
        `;
        }
    }

    // Creates a new Shape and calls the renderShape function which creates the canvas in order to receive the user's data and place the logo on the canvas
    let newShape = new Shape("300", "200", "http://www.w3.org/2000/svg").renderShape();

    // Renders a shape as chosen by the user
    switch (data.shape) {
        case 'circle':
            const newCircle = new Circle("300", "200", "http://www.w3.org/2000/svg", "150", "100", "80", `${data.shapeColor}`);
            newShape += newCircle.renderCircle();
            break;
        case 'triangle':
            const newTriangle = new Triangle("300", "200", "http://www.w3.org/2000/svg", "150 18 244 182 56 182", `${data.shapeColor}`);
            newShape += newTriangle.renderTriangle();
            break;
        case 'square':
            const newSquare = new Square("300", "200", "http://www.w3.org/2000/svg", "70", "20", "160", "160", `${data.shapeColor}`);
            newShape += newSquare.renderSquare();
            break;
        default:
            break;
    }


    class LogoText {
        constructor(xCoord, yCoord, fontSize, textAnchor, fill) {
            this.xCoord = xCoord;
            this.yCoord = yCoord;
            this.fontSize = fontSize;
            this.textAnchor = textAnchor;
            this.fill = fill;
        }

        renderText() {
            return `<text x="${this.xCoord}" y="${this.yCoord}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${data.charactersColor}">${data.characters}</text></svg>
        `;
        }
    }

    const newLogoText = new LogoText("150", "125", "60", "middle", `${data.charactersColor}`);
    newShape += newLogoText.renderText();

    return newShape;
}

// This shares the information with index.js.
module.exports = generateShape;