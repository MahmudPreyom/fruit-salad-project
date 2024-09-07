import BestMenu from "../BestMenu/BestMenu";
import HealthyFood from "../HealthyFood/HealthyFood";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
        <div>
            <HealthyFood/>
            <BestMenu/>
            <Subscribe/>
        </div>
    );
};

export default Home;