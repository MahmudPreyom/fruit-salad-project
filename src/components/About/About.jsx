/* eslint-disable react/no-unescaped-entities */

import PeopleComents from "./PeopleComents";

const About = () => {
    return (
        <div className=" bg-orange-100">
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 md:w-[1170px] lg:w-[1170px] gap-9 p-10">
                <div className="mt-28">
                    <h3 className="text-4xl font-bold">What Are People<br />Saying <span className="text-orange-500">About Us</span></h3>
                    <p>We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.</p>
                </div>
                <div className="">
                    <PeopleComents />
                </div>
            </div></div>
    );
};

export default About;