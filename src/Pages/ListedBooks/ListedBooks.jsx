import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { getReadBooks } from "../../Utility/localstorage";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <h1 className="text-3xl mx-4 font-bold p-6 bg-base-200 my-6 flex items-center justify-center rounded-lg">Books</h1>
            <div className="flex items-center justify-center ">
                <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
            </div>
            {/* listed book */}
            <div className="flex items-center mx-4 p-2 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 rounded-lg">
                <Link
                 to=''
                onClick={()=> setTabIndex(0)}
                 rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <span>Read Books</span>
                </Link>
                <Link
                to={`wishlist`}
                onClick={()=> setTabIndex(1)}
                rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;