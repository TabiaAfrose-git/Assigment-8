import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishListBooks } from "../../Utility/localstorage";
import ReadBook from "../ReadBook/ReadBook";

const WishlistBooks = () => {
    const data = useLoaderData();
    const [wishListBooks, setWishListBooks] = useState([]);
    useEffect(()=>{
        const wishList_ids = getWishListBooks();
        // console.log(books_ids);
        if(data.length > 0){
            const storeWishList = data.filter(book => (wishList_ids.includes(book.bookId)))
            setWishListBooks(storeWishList);
        }
    },[data])
    return (
        <div>
            <h1>Wishlist Books...</h1>
            <div className='sm:w-full'>
                {
                wishListBooks.map(readBook =>
                <ReadBook
                        key = {readBook.bookId}
                        readBook = {readBook}>
                </ReadBook>)
                }
            </div>
        </div>

    );
};

export default WishlistBooks;