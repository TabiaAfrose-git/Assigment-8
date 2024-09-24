
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
 let have;
 if(!exists){
    have = true;
    storeReadBooks.push(id);
    localStorage.setItem('read-books', JSON.stringify(storeReadBooks))
 }
 else have = false;
 return have;
}
const saveWishList = id => {
    const storeWishList = getWishListBooks();
    const existInWishList = storeWishList.find(bookId => bookId === id);
    const storeReadBooks = getReadBooks();
    const existInReadBooks = storeReadBooks.find(bookId => bookId === id);
    let have;
    if((!existInWishList) && (!existInReadBooks)){
        have = true;
        storeWishList.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storeWishList))
    }
    else have = false;
    return have;
}
export{getReadBooks,saveReadBooks,getWishListBooks,saveWishList}