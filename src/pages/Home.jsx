import Header from "../componets/Header/index"
import Image from "../componets/Image/index"
import Description from "../componets/Description/index"
import Footer from "../componets/Footer/index"
import images from "../json/images.json"
function Home() {
    return (
        <div ClassName="homeLayout">
        <Header />
        <Image images={images}/>              
        <Description />
        <Footer />
        </div>
        );
}
export default Home