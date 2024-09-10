import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdCall, MdForwardToInbox } from "react-icons/md";


const Footer = () => {
    return (
        <div className="md:container lg:container">
            <footer className="footer md:mx-80 lg:mx-80 bg-white text-base-content p-10">
                {/* <div className="md:mx-auto md:ml-96 md:flex md:gap-36"> */}
                    <aside className="">
                        <h4 className="footer-title"><span className="text-orange-500">JEZ</span> SALAD</h4>
                        <p>
                            Jez Salad is the pioneer of<br />
                            healthy fruit salad with<br />
                            high nutrition.
                        </p>
                        <small>©Copyright Jez Salad</small>
                    </aside>
                    <nav className="">
                        <h6 className="footer-title text-orange-500">Feature</h6>
                        <a className="link link-hover">Menu</a>
                        <a className="link link-hover">Promo</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">About us</a>
                    </nav>
                    <nav className="">
                        <h6 className="footer-title text-orange-500">Get in Touch</h6>
                        <p className="flex gap-3"><CiLocationOn className="text-orange-500" />8819 Ohio St. South Gate,<br />
                            CA 90280</p>
                        <p className="flex gap-3"><MdForwardToInbox className="text-orange-500" />Ourstudio@hello.com</p>
                        <p className="flex gap-3"><MdCall className="text-orange-500" />+1 386-688-3295</p>
                    </nav>
                    <nav className="">
                        <div className="footer-title text-orange-500 flex gap-4">
                            <FaTwitter />
                            <FaLinkedin />
                            <FaInstagram />
                        </div>
                        <p>Follow our social media.</p>
                    </nav>
                {/* </div> */}
            </footer>
        </div>
    );
};

export default Footer;