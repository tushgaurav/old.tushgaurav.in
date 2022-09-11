import quotes from "./data.json" assert { type: "json" };
// const quotes = require("./data.json");
const QUOTE_COUNT = quotes.quotes.length;
export function getRandomQuote() {
  var index = Math.floor(Math.random() * QUOTE_COUNT);
  return quotes.quotes[index].quote;
}

export function getRandomQuoteWithAuthor() {
  var index = Math.floor(Math.random() * QUOTE_COUNT);
  var quote = quotes.quotes[index];
  return Object.values(quote);
}
