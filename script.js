import { getRandomQuote } from "./QuoteEngine/quoteEngine.js";

const footerQuote = document.getElementById("quote");
footerQuote.innerHTML = getRandomQuote();
