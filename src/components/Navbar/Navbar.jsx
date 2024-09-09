
const Navbar = () => {

    const navOption = <>
        <li className="hover:text-orange-500 font-semibold">Home</li>
        <li className="hover:text-orange-500 font-semibold">Menu</li>
        <li className="hover:text-orange-500 font-semibold">contact</li>
        <li className="hover:text-orange-500 font-semibold">About us</li>
    </>

    return (
        <div className="md:w-[1170px] lg:w-[1170px] mx-auto">
            <div className="navbar">
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
                            {navOption}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold md:-ml-12 lg:-ml-12"><span className="text-orange-500">JEZ</span> SALAD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 flex justify-evenly">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end mt-2">
                        <button className="btn btn-warning rounded-full text-white w-24">Sign</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;