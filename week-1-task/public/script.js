const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// Fetch random quote from a Web API
async function fetchRandomQuote() {
    try {
        const response = await fetch('/api/random-quote');
        const quoteData = await response.json();
        quoteElement.textContent = quoteData.q; // Set the quote text
        authorElement.textContent = `— ${quoteData.a}`; // Set the author
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

// Event listeners
newQuoteButton.addEventListener('click', fetchRandomQuote);

// Fetch an initial random quote
fetchRandomQuote();