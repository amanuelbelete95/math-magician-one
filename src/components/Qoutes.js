import React, { useState, useEffect } from 'react';
import './Qoutes.css';

const Quotes = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': 'bs7RhiObrbdC/mikdWgwig==M0uBzZVvHaArFcHx',
            },
          },
        );
        const data = await response.json();
        const { author, quote } = data[0];
        setQuote({ author, quote });
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch the quote.');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          <p className="quote-content">{quote.quote}</p>
          <h2 className="quote-author">{quote.author}</h2>
        </>
      )}
    </div>
  );
};

export default Quotes;
