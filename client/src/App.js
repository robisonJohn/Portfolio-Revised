import './App.css';
import { useState, useEffect } from 'react';
import { getBooks } from './services/books' 

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await getBooks();
      setBooks(allBooks);
    };
    fetchBooks()
  }, []);
  return (
    <div className="App">
      <h1>Hello there</h1>
      <div>
        {books.map((book) => book.title)}
      </div>
    </div>
  );
}

export default App;
