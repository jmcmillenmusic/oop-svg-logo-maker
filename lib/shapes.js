// Creates the Shape class which contains the width, height, and XML Namespace (xmlns) for all shapes and sets up the canvas to  receive the logo
class Shape {
    constructor (width, height, xmlns) {
        this.width = width;
        this.height = height;
        this.xmlns = xmlns;
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
}

// Creates the Triangle class which is a child of the Shape class that also contains coordinates for each of its points and a fill color (chosen by user)
class Triangle extends Shape {
    constructor (width, height, xmlns, points, fill) {
        super (width, height, xmlns);
        this.points = points;
        this.fill = fill;
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
}

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