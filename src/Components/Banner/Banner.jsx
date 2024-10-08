import { Link} from "react-router-dom";
import Image from '../../../public/img/p-6.png';
const Banner = () => {
    return (
  <div className="hero bg-base-200 min-h-[555px] rounded-lg my-10 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={Image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="w-2/4">
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <Link to = '/listedbooks'>
        <button className="btn bg-[#59C6D2] text-white my-5">View The List</button>
      </Link>

    </div>
  </div>
</div>
    );
};

export default Banner;