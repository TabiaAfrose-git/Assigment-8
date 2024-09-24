import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const WishListCard = ({card}) => {
    const {image,bookName,author,tags,yearOfPublishing,publisher,totalPages,bookId,category,rating} = card;
    return (
        <div className="card card-side  p-4 border-2 m-4">
            <figure className='w-44 h-44 mx-4 m-auto rounded-xl'>
            <img
                src={image}
                alt="Movie" />
            </figure>
            <div className="card-body">
                <div className='sm:flex-col lg:flex justify-between' >
                    <div>
                        <h2 className="card-title">{bookName}</h2>
                        <p className='py-4'>By:{author}</p>
                        <div className='lg:flex gap-2 items-center mt-4 sm:flex-wrap'>
                            <div className='flex gap-2 items-center'><span className="font-bold">Tag</span>
                                {
                                    tags.map((tag,idx) =><p
                                    className='text-[#23BE0A] bg-green-50 px-3 py-2  rounded-lg text-center rounded-full sm:flex-wrap'
                                    key={idx}
                                    >#{tag}</p>)
                                }
                            </div>
                            <div className='flex gap-1 ' >
                                <CiLocationOn></CiLocationOn>
                                <small>Year of Publishing: {yearOfPublishing}</small>
                            </div>

                        </div>
                        <div className='flex gap-3 items-center my-4 sm:flex-wrap' >
                            <div className='flex gap-1 items-center'>
                                <IoPeopleOutline></IoPeopleOutline>
                                <small>Publisher: {publisher}</small>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <FaBook></FaBook>
                                <small>Page {totalPages}</small>
                            </div>
                            <hr />
                        </div>
                        <div className='flex gap-2 items-center mt-4 sm:flex-wrap '>
                                <p className='text-blue-500 bg-blue-50 p-3 rounded-lg text-center rounded-full'>Category: {category}</p>
                                <p className='text-yellow-500 bg-yellow-50 p-3 rounded-lg text-center rounded-full'>Rating: {rating}</p>
                                <Link to = {`/book/${bookId}`}>
                                    <p className='text-white bg-[#23BE0A] p-3 rounded-lg text-center rounded-full'>View Details</p>
                                </Link>

                        </div>


                    </div>


                </div>
            </div>
      </div>
    );
};
WishListCard.propTypes = {
    card: PropTypes.object
}

export default WishListCard;