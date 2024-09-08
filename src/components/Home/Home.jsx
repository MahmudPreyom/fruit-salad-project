import About from "../About/About";
import BestMenu from "../BestMenu/BestMenu";
import ChooseFood from "../ChooseFood/ChooseFood";
// import HealthyFood from "../HealthyFood/HealthyFood";
import Subscribe from "../Subscribe/Subscribe";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner/>
            <ChooseFood/>
            <About/>
            {/* <HealthyFood/> */}
            <BestMenu/>
            <Subscribe/>
        </div>
    );
};

export default Home;