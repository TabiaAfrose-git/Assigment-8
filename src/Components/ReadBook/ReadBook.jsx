
import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";

const ReadBook = ({readBook}) => {
    return (
        <div className="card card-side  p-4 border-2 m-4">
            <figure className='w-44 h-44  mx-4 m-auto rounded-xl'>
            <img
                src={readBook.image}
                alt="Movie" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between' >
                    <div>
                        <h2 className="card-title">{readBook.bookName}</h2>
                        <p className='py-4'>By:{readBook.author}</p>
                        <div className='flex gap-2 items-center mt-4'>
                            <div className='flex gap-2 items-center '><span className="font-bold">Tag</span>
                                {
                                    readBook.tags.map((tag,idx) =><p
                                    className='text-[#23BE0A] bg-green-50 px-3 py-2  rounded-lg text-center rounded-full'
                                    key={idx}
                                    >#{tag}</p>)
                                }
                            </div>
                            <div className='flex gap-1 ' >
                                <CiLocationOn></CiLocationOn>
                                <small>Year of Publishing: {readBook.yearOfPublishing}</small>
                            </div>

                        </div>
                        <div className='flex gap-2 items-center my-4'>
                            <div className='flex gap-1 items-center'>
                                <IoPeopleOutline></IoPeopleOutline>
                                <small>Publisher: {readBook.publisher}</small>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <FaBook></FaBook>
                                <small>Page {readBook.totalPages}</small>
                            </div>
                            <hr />
                        </div>
                        <div className='flex gap-2 items-center mt-4'>
                                <p className='text-blue-500 bg-blue-50 p-3 rounded-lg text-center rounded-full'>Category: {readBook.category}</p>
                                <p className='text-yellow-500 bg-yellow-50 p-3 rounded-lg text-center rounded-full'>Rating: {readBook.rating}</p>
                                <p className='text-white bg-[#23BE0A] p-3 rounded-lg text-center rounded-full'>View Details</p>

                        </div>


                    </div>


                </div>
            </div>
      </div>
    );
};
ReadBook.propTypes = {
    readBook: PropTypes.object
}

export default ReadBook;