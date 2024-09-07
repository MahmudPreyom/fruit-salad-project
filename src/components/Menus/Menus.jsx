/* eslint-disable react/no-unescaped-entities */

const Menus = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5">
            {/* 1 */}
            <div className="mx-auto p-6 rounded-lg shadow-lg overflow-hidden relative w-[360px] h-[520px]">
                
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: "url('https://i.ibb.co.com/9G7Rynj/bestsalad.png')", backgroundRepeat: 'no-repeat' }}
                ></div>


                <div className="relative z-10 text-white mt-96">
                    <p className="text-base mb-2">Mini Salad Yummy </p>
                    <h1 className="text-3xl font-bold mb-4">$ 2.99</h1>
                </div>
            </div>


            {/* 2 */}
            <div className="mx-auto p-6 rounded-lg shadow-lg overflow-hidden relative  w-[360px] h-[520px]">
                
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: "url('https://i.ibb.co.com/kKdHb24/menu2.png')", backgroundRepeat: 'no-repeat' }}
                ></div>


                <div className="relative z-10 text-white mt-96">
                    <p className="text-base mb-2">Completed Salad</p>
                    <h1 className="text-3xl font-bold mb-4">$ 3.99</h1>
                </div>
            </div>

            {/* 3 */}
            <div className="max-w-sm mx-auto p-6 rounded-lg shadow-lg overflow-hidden relative w-[360px] h-[520px]">
                
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: "url('https://i.ibb.co.com/XDfNJpX/menu3.png')", backgroundRepeat: 'no-repeat' }}
                ></div>


                <div className="relative z-10 text-white mt-96">
                    <p className="text-base mb-2">Salad Yummy Red</p>
                    <h1 className="text-3xl font-bold mb-4">$ 3.99</h1>
                </div>
            </div>
        </div>
    );
};

export default Menus;