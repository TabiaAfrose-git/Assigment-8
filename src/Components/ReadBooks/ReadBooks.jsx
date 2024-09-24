
import { useLoaderData } from 'react-router-dom';
import { getReadBooks } from '../../Utility/localstorage';
import { useEffect, useState } from 'react';
import ReadBook from '../ReadBook/ReadBook';

// import { getReadBooks } from '../../Utility/localstorage';
const ReadBooks = () => {

    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);

    useEffect(()=>{
        const books_ids = getReadBooks();
        // console.log(books_ids);
        if(books.length > 0){
            const readBookList = books.filter(book => books_ids.includes(book.bookId))
            setReadBooks(readBookList);
        }
    },[])


    return (
        <div>
            <h1>ReadBooks...</h1>
            {
              readBooks.map(readBook =>
              <ReadBook
                    key = {readBook.bookId}
                    readBook = {readBook}>
            </ReadBook>)
            }

        </div>
    );
};

export default ReadBooks;