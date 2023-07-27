// Creates the Shape class which contains the width, height, and XML Namespace (xmlns) for all shapes and sets up the canvas to  receive the logo
class Shape {
    constructor (width, height, xmlns) {
        this.width = width;
        this.height = height;
        this.xmlns = xmlns;
    }

    renderShape() {
        return `<svg width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">
        </svg>
        `;
    }
}

// Creates the Circle class which is a child of the Shape class that also contains coordinates for its center, its radius, and a fill color (chosen by user)
class Circle extends Shape {
    constructor (width, height, xmlns, centerX, centerY, radius, fill) {
        super (width, height, xmlns);
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
    constructor (width, height, xmlns, points, fill) {
        super (width, height, xmlns);
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
    constructor (width, height, xmlns, startX, startY, rectWidth, rectHeight, fill) {
        super (width, height, xmlns);
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
const newShape = new Shape ("300", "200", "http://www.w3.org/2000/svg");
newShape.renderShape();

// Creates variables for identifying elements in switch case below
const svgEl = document.querySelector("svg");
const circleEl = document.querySelector("circle");
const polygonEl = document.querySelector("polygon");
const rectEl = document.querySelector("rect");

// Renders a shape as chosen by the user
switch (data.shape) {
    case 'circle':
        const newCircle = new Circle ("300", "200", "http://www.w3.org/2000/svg", "150", "100", "80", `${data.shapeColor}`);
        newCircle.renderCircle();
        svgEl.appendChild(circleEl);
        break;
    case 'triangle':
        const newTriangle = new Triangle ("300", "200", "http://www.w3.org/2000/svg", "150 18 244 182 56 182", `${data.shapeColor}`);
        newTriangle.renderTriangle();
        svgEl.appendChild(polygonEl);
        break;
    case 'square':
        const newSquare = new Square ("300", "200", "http://www.w3.org/2000/svg", "70", "20", "160", "160", `${data.shapeColor}`);
        newSquare.renderSquare();
        svgEl.appendChild(rectEl);
        break;
    default:
        break;
}

// Generates the Shape, one of its children, and the rest of the logo based on user-submitted details
function generateShape(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Logo</title>
    </head>
    <body>
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.charactersColor}">${data.characters}</text>
        </svg>
    </body>
    </html>
    `;
}

// This shares the information with index.js.
module.exports = generateShape;