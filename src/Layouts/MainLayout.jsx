import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="lg: w-11/12 mx-auto md: w-10/12">
            <div className='h-16 p-2'>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;