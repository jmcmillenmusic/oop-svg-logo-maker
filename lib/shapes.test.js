// Declares initial variables
const { Circle, Square, Triangle } = require('./shapes');

// Tests to see if the code renders a red triangle when the user chooses to make a red triangle
describe('red triangle', () => {
    it('should create a red triangle when the user enters this data', () => {
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
        let testShape = new Shape("300", "200", "http://www.w3.org/2000/svg").renderShape();
        class Triangle extends Shape {
            constructor(width, height, xmlns, points, fill) {
                super(width, height, xmlns);
                this.points = points;
                this.fill = fill;
            }
    
            renderTriangle() {
                return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 18 244 182 56 182" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text></svg>`;
            }
        }
        const testTriangle = new Triangle("300", "200", "http://www.w3.org/2000/svg", "150 18 244 182 56 182", "red");
        testShape += testTriangle.renderTriangle();
        expect(testTriangle.renderTriangle()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 18 244 182 56 182" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text></svg>`);
    });
});

// Tests to see if the code renders a purple circle when the user chooses to make a purple circle
describe('purple circle', () => {
    it('should create a purple circle when the user enters this data', () => {
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
        let testShape = new Shape("300", "200", "http://www.w3.org/2000/svg").renderShape();
        class Circle extends Shape {
            constructor(width, height, xmlns, centerX, centerY, radius, fill) {
                super(width, height, xmlns);
                this.centerX = centerX;
                this.centerY = centerY;
                this.radius = radius;
                this.fill = fill;
            }
    
            renderCircle() {
                return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="purple"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text></svg>`;
            }
        }
        const testCircle = new Circle("300", "200", "http://www.w3.org/2000/svg", "150", "100", "80", "purple");
        testShape += testCircle.renderCircle();
        expect(testCircle.renderCircle()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="purple"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text></svg>`);
    });
});

// Tests to see if the code renders a green square when the user chooses to make a green square
describe('green square', () => {
    it('should create a green square when the user enters this data', () => {
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
        let testShape = new Shape("300", "200", "http://www.w3.org/2000/svg").renderShape();
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
                return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text></svg>`;
            }
        }
        const testSquare = new Square("300", "200", "http://www.w3.org/2000/svg", "70", "20", "160", "160", "green");
        testShape += testSquare.renderSquare();
        expect(testSquare.renderSquare()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text></svg>`);
    });
});