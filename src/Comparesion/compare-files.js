// const fs = require('fs');

// // Function to read a file and extract words
// function extractWords(filePath) {
//     const content = fs.readFileSync(filePath, 'utf-8');
//     // Remove special characters, split into words, and filter out empty strings
//     return content.replace(/[^\w\s]/g, '').split(/\s+/).filter(word => word.length > 0);
// }

// // Function to compare two files and find missing words
// function findMissingWords(mainFilePath, referenceFilePath) {
//     const mainWords = extractWords(mainFilePath);
//     const referenceWords = extractWords(referenceFilePath);

//     // Find words in reference file that are missing in the main file
//     const missingWords = referenceWords.filter(word => !mainWords.includes(word));

//     return missingWords;
// }

// // File paths
// const mainFilePath = 'c:\\Users\\Parthi\\Desktop\\Frontend_FW\\Angular\\simple\\src\\app\\app.component.ts'; // Replace with your main file path
// const referenceFilePath = 'c:\\Users\\Parthi\\Desktop\\Frontend_FW\\Angular\\simple\\src\\app\\counter\\counter.component.ts'; // Replace with your reference file path

// // Find and log missing words
// const missingWords = findMissingWords(mainFilePath, referenceFilePath);
// console.log('Missing words:', missingWords);






// const fs = require('fs');
// const path = require('path');

// // Input array of words to search for
// let wordsToSearch = ['ExaComponent', 'CounterComponent', '@Input', '<app-root>']; // Replace with your array of words

// // Object to store the count of each word
// const wordCounts = {};
// wordsToSearch.forEach(word => {
//     wordCounts[word] = 0;
// });

// // Function to recursively traverse directories
// function traverseDirectory(dir) {
//     const files = fs.readdirSync(dir);

//     files.forEach(file => {
//         const filePath = path.join(dir, file);
//         const stat = fs.statSync(filePath);

//         if (stat.isDirectory()) {
//             // If it's a directory, traverse it recursively
//             traverseDirectory(filePath);
//         } else if (stat.isFile()) {
//             // If it's a file, search for the words
//             searchWordsInFile(filePath);
//         }
//     });
// }

// // Function to search for words in a file
// function searchWordsInFile(filePath) {
//     const content = fs.readFileSync(filePath, 'C:\Users\Parthi\Desktop\Frontend_FW\Angular\simple\src');

//     wordsToSearch = wordsToSearch.filter(word => {
//         const regex = new RegExp(`\\b${word}\\b`, 'g'); // Match whole words only
//         const matches = content.match(regex);

//         if (matches) {
//             wordCounts[word] += matches.length;
//             return false; // Remove the word from the array if found
//         }
//         return true; // Keep the word in the array if not found
//     });
// }

// // Start traversing from the root directory of the Angular project
// const angularProjectRoot = 'C:\Users\Parthi\Desktop\Frontend_FW\Angular\simple\src'; // Replace with the path to your Angular project's src folder
// traverseDirectory(angularProjectRoot);

// // Output the results
// console.log('Remaining Words:', wordsToSearch);
// console.log('Word Counts:');
// for (const [word, count] of Object.entries(wordCounts)) {
//     console.log(`${word}: ${count}`);
// }



// ///Import the 'fs' module to interact with the file system
// const fs = require('fs');
// // Import the 'path' module to handle file and directory paths
// const path = require('path');

// // Input array of words to search for
// let wordsToSearch = ['ExaComponent', 'CounterComponent', '@Input', '<app-root>']; // Replace with your array of words

// // Object to store the count of each word
// const wordCounts = {};
// wordsToSearch.forEach(word => {
//     wordCounts[word] = 0; // Initialize the count for each word to 0
// });

// // Function to recursively traverse directories
// function traverseDirectory(dir) {
//     // Read the contents of the directory
//     const files = fs.readdirSync(dir);

//     // Iterate over each file/directory in the current directory
//     files.forEach(file => {
//         // Construct the full path of the file/directory
//         const filePath = path.join(dir, file);
//         // Get the stats of the file/directory (to check if it's a file or directory)
//         const stat = fs.statSync(filePath);

//         if (stat.isDirectory()) {
//             // If it's a directory, traverse it recursively
//             traverseDirectory(filePath);
//         } else if (stat.isFile()) {
//             // If it's a file, search for the words in the file
//             searchWordsInFile(filePath);
//         }
//     });
// }

// // Function to search for words in a file
// function searchWordsInFile(filePath) {
//     // Read the content of the file as a UTF-8 encoded string
//     const content = fs.readFileSync(filePath, 'utf8');

//     // Filter the wordsToSearch array
//     wordsToSearch = wordsToSearch.filter(word => {
//         // Create a regular expression to match the whole word
//         const regex = new RegExp(`\\b${word}\\b`, 'g');
//         // Find all matches of the word in the file content
//         const matches = content.match(regex);

//         if (matches) {
//             // If matches are found, increment the count for the word
//             wordCounts[word] += matches.length;
//             return false; // Remove the word from the array if found
//         }
//         return true; // Keep the word in the array if not found
//     });
// }

// // Get the 'src' folder path from the command-line arguments
// const angularProjectRoot = process.argv[2]; // The path is passed as the first argument

// // Check if the path is provided
// if (!angularProjectRoot) {
//     console.error('Please provide the path to the "src" folder as a command-line argument.');
//     process.exit(1); // Exit the program with an error code
// }

// // Start traversing from the root directory of the Angular project
// traverseDirectory(angularProjectRoot);

// // Output the results
// console.log('Remaining Words:', wordsToSearch); // Words not found in any file
// console.log('Word Counts:'); // Count of each word found in the files
// for (const [word, count] of Object.entries(wordCounts)) {
//     console.log(`${word}: ${count}`);
// }



// const fs = require('fs');
// const path = require('path');

// // Input array of words to search for
// let wordsToSearch = ['ExaComponent', 'CounterComponent', '@Input', '<app-root>']; // Replace with your array of words

// // Object to store the count of each word
// const wordCounts = {};
// wordsToSearch.forEach(word => {
//     wordCounts[word] = 0; // Initialize the count for each word to 0
// });

// // Function to recursively traverse directories
// function traverseDirectory(dir) {
//     // Read the contents of the directory
//     const files = fs.readdirSync(dir);

//     // Iterate over each file/directory in the current directory
//     files.forEach(file => {
//         // Construct the full path of the file/directory
//         const filePath = path.join(dir, file);
//         // Get the stats of the file/directory (to check if it's a file or directory)
//         const stat = fs.statSync(filePath);

//         if (stat.isDirectory()) {
//             // If it's a directory, traverse it recursively
//             traverseDirectory(filePath);
//         } else if (stat.isFile()) {
//             // If it's a file, search for the words in the file
//             searchWordsInFile(filePath);
//         }
//     });
// }

// // Function to search for words in a file
// function searchWordsInFile(filePath) {
//     // Read the content of the file as a UTF-8 encoded string
//     const content = fs.readFileSync(filePath, 'utf8');

//     // Filter the wordsToSearch array
//     wordsToSearch = wordsToSearch.filter(word => {
//         // Create a regular expression to match the whole word
//         const regex = new RegExp(`\\b${word}\\b`, 'g');
//         // Find all matches of the word in the file content
//         const matches = content.match(regex);

//         if (matches) {
//             // If matches are found, increment the count for the word
//             wordCounts[word] += matches.length;
//             return false; // Remove the word from the array if found
//         }
//         return true; // Keep the word in the array if not found
//     });
// }

// // Define the root directory to traverse
// const rootDirectory = 'c:\\Users\\Parthi\\Desktop\\Frontend_FW\\Angular\\simple\\src';

// // Start traversing from the root directory
// traverseDirectory(rootDirectory);

// // Output the results
// console.log('Remaining Words:', wordsToSearch); // Words not found in any file
// console.log('Word Counts:'); // Count of each word found in the files
// for (const [word, count] of Object.entries(wordCounts)) {
//     console.log(`${word}: ${count}`);
// }







// const fs = require('fs');
// const path = require('path');

// // Input array of words to search for
// let wordsToSearch = ['ExaComponent', 'CounterComponent', '@Input()', '<app-root> </app-root>']; // Replace with your array of words

// // Object to store the count of each word
// const wordCounts = {};
// wordsToSearch.forEach(word => {
//     wordCounts[word] = 0; // Initialize the count for each word to 0
// });

// // Function to recursively traverse directories
// function traverseDirectory(dir) {
//     // Read the contents of the directory
//     const files = fs.readdirSync(dir);

//     // Iterate over each file/directory in the current directory
//     files.forEach(file => {
//         // Construct the full path of the file/directory
//         const filePath = path.join(dir, file);
//         // Get the stats of the file/directory (to check if it's a file or directory)
//         const stat = fs.statSync(filePath);

//         if (stat.isDirectory()) {
//             // If it's a directory, traverse it recursively
//             traverseDirectory(filePath);
//         } else if (stat.isFile()) {
//             // If it's a file, search for the words in the file
//             searchWordsInFile(filePath);
//         }
//     });
// }

// // Function to search for words in a file
// function searchWordsInFile(filePath) {
//     // Read the content of the file as a UTF-8 encoded string
//     const content = fs.readFileSync(filePath, 'utf8');

//     // Filter the wordsToSearch array
//     wordsToSearch = wordsToSearch.filter(word => {
//         // Create a regular expression to match the whole word
//         const regex = new RegExp(`\\b${word}\\b`, 'g');
//         // Find all matches of the word in the file content
//         const matches = content.match(regex);

//         if (matches) {
//             // If matches are found, increment the count for the word
//             wordCounts[word] += matches.length;
//             // Remove the word from the array only if it appears more than once
//             return wordCounts[word] <= 1;
//         }
//         return true; // Keep the word in the array if not found
//     });
// }

// // Define the root directory to traverse
// const rootDirectory = 'c:\\Users\\Parthi\\Desktop\\Frontend_FW\\Angular\\simple\\src';

// // Start traversing from the root directory
// traverseDirectory(rootDirectory);

// // Filter out words that appear only once
// for (const word of Object.keys(wordCounts)) {
//     if (wordCounts[word] <= 1) {
//         delete wordCounts[word]; // Remove words that appear only once
//     }
// }

// // Output the results
// console.log('Remaining Words:', wordsToSearch); // Words not found in any file
// console.log('Word Counts (Repeated Words):'); // Count of each word found more than once
// for (const [word, count] of Object.entries(wordCounts)) {
//     console.log(`${word}: ${count}`);
// }



// const fs = require('fs');
// const path = require('path');

// // Input an array of words to search for
// let wordsToSearch = ['ExaComponent', 'CounterComponent', '@Input()', '<app-root> </app-root>']; // Replace with your array of words

// // Object to store the count of each word
// const wordCounts = {};
// wordsToSearch.forEach(word => {
//     wordCounts[word] = 0; // Initialize the count for each word to 0
// });

// // Function to recursively traverse directories
// function traverseDirectory(dir) {
//     // Read the contents of the directory
//     const files = fs.readdirSync(dir);

//     // Iterate over each file/directory in the current directory
//     files.forEach(file => {
//         // Construct the full path of the file/directory
//         const filePath = path.join(dir, file);
//         // Get the stats of the file/directory (to check if it's a file or directory)
//         const stat = fs.statSync(filePath);

//         if (stat.isDirectory()) {
//             // If it's a directory, traverse it recursively
//             traverseDirectory(filePath);
//         } else if (stat.isFile()) {
//             // If it's a file, search for the words in the file
//             searchWordsInFile(filePath);
//         }
//     });
// }

// // Function to search for words in a file
// function searchWordsInFile(filePath) {
//     // Read the content of the file as a UTF-8 encoded string
//     const content = fs.readFileSync(filePath, 'utf8');

//     // Filter the wordsToSearch array
//     wordsToSearch = wordsToSearch.filter(word => {
//         // Create a regular expression to match the whole word
//         const regex = new RegExp(`\\b${word}\\b`, 'g');
//         // Find all matches of the word in the file content
//         const matches = content.match(regex);

//         if (matches) {
//             // If the word appears more than once, count all occurrences
//             if (matches.length > 1) {
//                 wordCounts[word] += matches.length;
//             }
//             return false; // Remove the word from the array if found (even once)
//         }
//         return true; // Keep the word in the array if not found
//     });
// }

// // Define the root directory to traverse
// const rootDirectory = 'c:\\Users\\Parthi\\Desktop\\Frontend_FW\\Angular\\simple\\src';

// // Start traversing from the root directory
// traverseDirectory(rootDirectory);

// // Output the results
// console.log('Remaining Words:', wordsToSearch); // Words not found in any file
// console.log('Word Counts:'); // Count of each word found in the files
// for (const [word, count] of Object.entries(wordCounts)) {
//     console.log(`${word}: ${count}`);
// }