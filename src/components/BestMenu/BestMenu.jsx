import Menus from "../Menus/Menus";


const BestMenu = () => {
    return (
        <div className="w-full lg:w-[1170px] md:w-[1170px] mx-auto mb-28 space-y-12">
            <div className="space-y-3">
                <p className="text-orange-500 text-center font-semibold">MENU YANG MEMBUATMU JATUH CINTA</p>
                <h3 className="font-bold text-3xl text-center">ENJOY THE BEST MENU AND GET<br /><span className="text-orange-500">DISCOUNTS</span> AVAILABLE</h3>
            </div>
                <Menus />
        </div>
    );
};

export default BestMenu;
