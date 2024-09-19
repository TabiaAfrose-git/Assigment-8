
import PropTypes from 'prop-types'; // ES6
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Book = ({book}) => {
    const{bookId,image,bookName,author,category,tags,rating} = book;
    return (
        <Link to = {`/book/${bookId}`}>
            <div className="card w-96 shadow-xl border border-gray-300">
                        <figure className="w-30 p-5 m-6 flex items-center">
                            <div className=' flex items-center'>
                                <img
                                    src={image}
                                    alt="Shoes"
                                    className="w-64 h-48 rounded-lg" />
                            </div>

                        </figure>
                <div className="card-body items-start text-center">
                    <div className='flex gap-2'>
                    {
                        tags.map((tag,idx) =><p
                        className='text-[#23BE0A] bg-green-50 p-2 rounded-lg'
                        key={idx}
                        >{tag}</p>)
                    }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr/>
                    <div className='text-sm w-full flex justify-between'>
                        <div className=''>{category}</div>
                        <div className='flex gap-2 items-center'>{rating}<FaRegStar></FaRegStar></div>

                    </div>
                </div>
            </div>
        </Link>

    );
};
Book.propTypes = {
    book: PropTypes.object,
}

export default Book;