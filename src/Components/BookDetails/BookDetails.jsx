import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks,saveWishList } from "../../Utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData();
    const {id} =useParams();
    //console.log(id);
    const Int_id = parseInt(id);
    const book =  books.find(book =>book.bookId === Int_id)
    const {image,bookName,tags,author,category,rating,review,totalPages,publisher,yearOfPublishing} = book;

    const handelReadBooks =()=>{
      if(saveReadBooks(Int_id)){
        toast("Books Added to Read List")
      }
      else toast.error("You have Already Read this Book!")
    }
    const handelWishlist = ()=>{
      if(saveWishList(Int_id)){
        toast("Books Added to Wish List")
      }
      else toast.error("You have Already Read this Book!")
    }
    return (
<div className="hero min-h-[100vh-70px]">
  <div className="hero-content bg-base-200 rounded-xl flex-col lg:flex-row p-20 mt-20 ">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{bookName}</h1>
      <p>By: {author}</p>
      <p>{category}</p>
      <p className="py-2">
        <span className="font-bold">Review:</span>{review}
      </p>

        <div className='flex gap-2 items-center'><span className="font-bold">Tag</span>
                    {
                        tags.map((tag,idx) =><p
                        className='text-[#23BE0A] bg-green-50 p-2 rounded-lg'
                        key={idx}
                        >#{tag}</p>)
                    }
        </div>
        <table className="table">
            <tbody>
                {/* row 1 */}
                <tr>
                    <td>Number of Pages:</td>
                    <td>{totalPages}</td>
                </tr>
                <tr>
                    <td>Publisher:</td>
                    <td>{publisher}</td>
                </tr>
                <tr>
                    <td>Year of Publishing:</td>
                    <td>{yearOfPublishing}</td>
                </tr>
                <tr>
                    <td>Rating:</td>
                    <td>{rating}</td>
                </tr>

            </tbody>
        </table>
    <button onClick={handelReadBooks} className="btn bg-white text-black my-5 m-4 px-6 border border-slate-400">Read</button>
      <button onClick={handelWishlist} className="btn bg-[#59C6D2] text-white my-5">Wishlist</button>
    </div>
  </div>
  <ToastContainer />
</div>
);
};

export default BookDetails;