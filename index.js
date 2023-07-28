// Declares initial variables
const inquirer = require('inquirer');
const fs = require('fs');
const generateShape = require('./lib/shapes');
var svgData;

// Creates an object array with a list of questions to be presented to the user
const questions = [
  {
    type: 'input',
    message: 'Please enter up to 3 characters to be placed on your logo',
    name: 'characters',
  },
  {
    type: 'input',
    message: 'Which color would you like the characters from the previous question to be? (You can enter either a color name or a hexadecimal code.)',
    name: 'charactersColor',
  },
  {
    type: 'list',
    message: 'Please choose a shape for your logo.',
    name: 'shape',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    message: 'Which color would you like the shape from the previous question to be? (You can enter either a color name or a hexadecimal code.)',
    name: 'shapeColor',
  }
];

// This writes the file with all of the data gathered from the user.
function writeToFile(fileName) {
  fs.writeFile(fileName, svgData, error => {
    if (error) {
      return console.log(error);
    } else {
      console.log('Generated logo.svg')
    }
  });
}

// This runs the initialization function.
function init() {
  inquirer.prompt(questions)
    .then(function(answers) {
      svgData = generateShape(answers);
      const fileName = 'logo.svg'
        writeToFile(fileName, answers);
    });
}
  
// Function call to initialize app
init();