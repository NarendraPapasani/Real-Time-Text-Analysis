import React, { useState, useEffect } from "react";

const TextArea = () => {
  const [text, setText] = useState("");
  const [uniqueWords, setUniqueWords] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWordsSet = new Set(words);
    setUniqueWords(uniqueWordsSet.size);

    const chars = text.replace(/[\s\W]/g, "");
    setCharCount(chars.length);

    setHighlightedText(text);
  }, [text]);

  const handleReplace = () => {
    if (!searchString) {
      setError("Please enter a search string.");
      return;
    }

    if (!text.includes(searchString)) {
      setError(
        `The search string "${searchString}" was not found in the text.`
      );
      return;
    }

    setError("");

    const newText = text.split(searchString).join(replaceString);
    setText(newText);

    const escapedReplaceString = replaceString.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );
    const highlightedNewText = newText.replace(
      new RegExp(escapedReplaceString, "g"),
      `<span className = "bg-lime-200">${replaceString}</span>`
    );
    setHighlightedText(highlightedNewText);
  };

  const handleTextChange = (e) => {
    const newText = e.target.innerText;
    setText(newText);
    setHighlightedText(newText);
    setError("");
  };

  return (
    <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800 font-serif">
        Text Analyzer
      </h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div
          className="w-full h-64 p-4 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-700 text-lg overflow-auto"
          contentEditable
          onInput={handleTextChange}
          dangerouslySetInnerHTML={{ __html: highlightedText }}
        />
        <div className="mt-6 flex flex-wrap justify-between items-center text-lg">
          <p className="text-indigo-700 font-medium">
            Unique Words: <span className="font-bold">{uniqueWords}</span>
          </p>
          <p className="text-pink-700 font-medium">
            Character Count: <span className="font-bold">{charCount}</span>
          </p>
        </div>
        <div className="mt-8 space-y-4 md:space-y-0 md:flex md:space-x-4">
          <input
            type="text"
            placeholder="Search String"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="w-full md:w-1/3 p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Replace String"
            value={replaceString}
            onChange={(e) => setReplaceString(e.target.value)}
            className="w-full md:w-1/3 p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            onClick={handleReplace}
            className="w-full md:w-1/3 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Replace All
          </button>
        </div>
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextArea;
