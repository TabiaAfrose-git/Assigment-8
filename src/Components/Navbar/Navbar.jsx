import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <NavLink to='/'
               className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}>Home</NavLink>
              <NavLink to='/listedbooks'
                className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}
              >Listed Books</NavLink>
              <NavLink to='/pagestoread'
                 className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}
              >Pages to Read</NavLink>
              <NavLink to='/about'
                  className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}
              >About us</NavLink>
              <NavLink to='/contact'
               className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}
              >Contact Us</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-2 gap-8 hover:border-1 border-sky-500">
            <NavLink to='/'
            className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}
            >Home</NavLink>
            <NavLink to='/listedbooks'
             className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}
            >Listed Books</NavLink>
            <NavLink to='/pagestoread'
             className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}
            >Pages to Read</NavLink>
            <NavLink to='/about'
             className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}
            >About us</NavLink>
            <NavLink to='/contact'
             className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-2 rounded-md':'p-2'}
            >Contact Us</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn bg-[#59C6D2] text-white">Sign In</a>
          <a className="btn bg-[#23BE0A] text-white">Sign Up</a>
        </div>
      </div>
    );
};

export default Navbar;