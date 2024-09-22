import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishListBooks } from "../../Utility/localstorage";
import ReadBook from "../ReadBook/ReadBook";

const WishlistBooks = () => {
    const books = useLoaderData();
    const [wishListBooks, setWishListBooks] = useState([]);
    useEffect(()=>{
        const wishList_ids = getWishListBooks();
        console.log(wishList_ids);
        if(books.length > 0){
            const storeWishList = books.filter(book => wishList_ids.includes(book.bookId))
            setWishListBooks(storeWishList);
        }
    },[])
    return (
        <div>
            <h1>Wishlist Books...</h1>
            {
              wishListBooks.map(readBook =>
              <ReadBook
                    key = {readBook.bookId}
                    readBook = {readBook}>
                </ReadBook>)
            }

        </div>
    );
};

export default WishlistBooks;