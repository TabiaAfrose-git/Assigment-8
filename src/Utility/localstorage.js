
const getReadBooks  = () =>{
    const storeReadBooks  = localStorage.getItem('read-books');
        if(storeReadBooks){
            return JSON.parse(storeReadBooks);

        }
        return [];
}
const getWishListBooks  = () =>{
    const storeWishListBooks = localStorage.getItem('wishlist-books');
        if(storeWishListBooks){
            return JSON.parse(storeWishListBooks);

        }
        return [];
}

const saveReadBooks = id => {
 const storeReadBooks = getReadBooks();
 const exists = storeReadBooks.find(bookId => bookId === id);
 if(!exists){
    storeReadBooks.push(id);
    localStorage.setItem('read-books', JSON.stringify(storeReadBooks))
 }
}
const saveWishList = id => {
    const storeReadBooks = getReadBooks();
    const storeWishList = getWishListBooks();
    const existsReadBooks = storeReadBooks.find(bookId => (bookId === id));
    if((!existsReadBooks)){
        storeWishList.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storeReadBooks))
    }
}
export{getReadBooks,saveReadBooks,getWishListBooks,saveWishList}