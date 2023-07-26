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