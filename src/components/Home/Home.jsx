import BestMenu from "../BestMenu/BestMenu";
import ChooseFood from "../ChooseFood/ChooseFood";
// import HealthyFood from "../HealthyFood/HealthyFood";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
        <div>
            <ChooseFood/>
            {/* <HealthyFood/> */}
            <BestMenu/>
            <Subscribe/>
        </div>
    );
};

export default Home;