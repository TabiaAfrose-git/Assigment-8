import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    },[])


    return (
        <div  >
            <h1 className="flex items-center justify-center text-3xl font-bold p-4 m-4">Books:</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-3  gap-4 m-4 pb-20 items-center justify-center">
                {
                books.map(book => <Book
                    key= {book.bookId}
                    book= {book}></Book> )
                }
            </div>

        </div>
    );
};

export default Books;