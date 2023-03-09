import Header from "../componets/Header/index"
import Image from "../componets/Image/index"
import Description from "../componets/Description/index"
import Footer from "../componets/Footer/index"
function Home() {
    return (
        <div>
            <Header />
        <div className="container">            
            <Image />
            <Description />            
        </div>
        <Footer />
        </div>        
    );
}
export default Home;