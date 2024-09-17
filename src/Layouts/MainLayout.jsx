import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
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