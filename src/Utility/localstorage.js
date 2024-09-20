
const getReadBooks  = () =>{
    const storeReadBooks  = localStorage.getItem('read-books');
        if(storeReadBooks){
            return JSON.parse(storeReadBooks);

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
export{getReadBooks,saveReadBooks}