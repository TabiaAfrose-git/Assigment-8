
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
    const storeWishList = getWishListBooks();
    const exists = storeWishList.find(bookId => bookId === id);
    if((!exists)){
        storeWishList.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storeWishList))
    }
}
export{getReadBooks,saveReadBooks,getWishListBooks,saveWishList}