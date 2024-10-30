import Banner from "./home/Banner";
import Features from "./home/Features";
import Mostplayed from "./home/Mostplayed";
import Navbar from "./Navbar";
import Preloader from "./Preloader";
import Cta from "./home/Cta";
import Categories from "./home/Categories";



function App() {
  return (
    <div >
      <Navbar/>

    {/* <Preloader/> */}
    <Banner/>
    <Features/>
    <Mostplayed/>
    <Categories/>
    <Cta/>
    </div>
  );
}

export default App;
