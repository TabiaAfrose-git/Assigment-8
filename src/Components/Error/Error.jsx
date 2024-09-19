import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Opps!!!</h1>
            <p className="py-6">
                404 Page: Make a 404 route/not found page.
            </p>
            <Link to = '/'>
                <button className="btn bg-[#59C6D2] text-white">Go To Home </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Error;