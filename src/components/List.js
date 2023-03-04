import React, { useState, useEffect } from 'react';

export default function List() {
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [DateOfIssue, setDateOfIssue] = useState('');
  const [booksArr, setBooksArr] = useState([]);
  

  const submitHandler = (event) => {
    event.preventDefault();
    if (bookName && bookAuthor && DateOfIssue) {
      const newBook = {
        bookName,
        bookAuthor,
        DateOfIssue,
      };
      localStorage.setItem('books', JSON.stringify([...booksArr, newBook]));
      setBooksArr([...booksArr, newBook]);
    }
  };

  const removeBook = (index) => {
    if (booksArr) {
      const newArray = booksArr.filter((book, bookIndex) => {
        return bookIndex !== index;
      });

      localStorage.setItem('books', JSON.stringify(newArray));
      setBooksArr(newArray);
    }
  };

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) setBooksArr(JSON.parse(storedBooks));
  }, []);

  return(
    <div>
    <form className="bookForm" onSubmit={(e) => submitHandler(e)}>
      <label  htmlFor="bookName">Book Title</label>
      <input
        id="bookName"
        name="bookName"
        type="text"
        placeholder="Book Title"
        maxLength="40"
        onChange={(e) => setBookName(e.target.value)}
        required
      ></input>
      <label htmlFor="bookAuthor">Author</label>
      <input
        id="bookAuthor"
        name="bookAuthor"
        type="text"
        placeholder="Book Author"
        maxLength="30"
        onChange={(e) => setBookAuthor(e.target.value)}
        required
      ></input>
      <label htmlFor="dateOfIssue">DateOfIssue</label>
      <input
        id="date of issue"
        name="date of issue"
        type="text"
        placeholder='Date of issue'
        onChange={(e) => setDateOfIssue(e.target.value)}
        required
      >
      </input>
      <input id="submit" type="submit" value="issue new book"></input>
    </form>
    <table>
      <tbody>
        <tr>
          <th>Book Name</th>
          <th>Book Author</th>
          <th>Date Of Issue</th>
          <th colSpan="2">Settings</th>
        </tr>
        {booksArr
          ? booksArr.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.bookName}</td>
                  <td>{item.bookAuthor}</td>
                  <td>{item.DateOfIssue}</td>
                  <td id="settings">
                   <button onClick={() => removeBook(index)}>Remove</button>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  </div>
    
  )

  
    
 
}