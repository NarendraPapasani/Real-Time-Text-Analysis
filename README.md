# React Text Analyzer

## Description

React Text Analyzer is a web application that allows users to analyze and manipulate text. It provides features such as counting unique words, character count, and a search and replace functionality with highlighted results.

deployed Link : https://statuesque-travesseiro-aab950.netlify.app/

## Features

- Real-time text analysis
- Unique word count
- Character count (excluding spaces and punctuation)
- Search and replace functionality
- Highlighting of replaced text
- Responsive design

## Technologies Used

- React
- Tailwind CSS
- JavaScript (ES6+)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

git clone https://github.com/yourusername/react-text-analyzer.git

2. Navigate to the project directory:

cd react-text-analyzer

3. Install the dependencies:

npm install

4. Start the development server:

npm start

5. Open your browser and visit `http://localhost:3000`

## Usage

1. Enter or paste your text into the text area.
2. The unique word count and character count will update in real-time.
3. To replace text:

- Enter the text you want to search for in the "Search String" input.
- Enter the replacement text in the "Replace String" input.
- Click the "Replace All" button.

4. Replaced text will be highlighted in yellow.

## Component Structure

The main component `TextArea` contains the following key elements:

- A contentEditable div for text input and display
- Input fields for search and replace strings
- A button to trigger the replace action
- Display areas for word and character counts
- An error message display area

## Key Functions

- `handleTextChange`: Updates the text state when the user types or edits the text.
- `handleReplace`: Performs the search and replace operation, updates the text, and highlights the replaced words.

## Styling

The project uses Tailwind CSS for styling, providing a responsive and modern user interface.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any questions or concerns, please open an issue on the GitHub repository.
