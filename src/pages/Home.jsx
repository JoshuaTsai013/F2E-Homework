import Header from "../componets/Header/index"
import Image from "../componets/Image/index"
import Description from "../componets/Description/index"
import Footer from "../componets/Footer/index"
import images from "../json/images.json"

import { useImages } from "../react-query"
function Home() {

    const {data,isLoading}= useImages();
    const imagesData = data || [];
    return (
        <div className="homeLayout">
        <Header />
        <Image images={imagesData}/>              
        <Description />
        <Footer />
        </div>
        );
}
export default Home