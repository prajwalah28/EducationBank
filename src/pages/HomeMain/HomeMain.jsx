
import SimpleImageSlider from "react-simple-image-slider";
import flowerImg from "../../assets/images/hom2.png";
import Img1 from "../../assets/images/home3.png";
import Img2 from "../../assets/images/home4.png";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";

  
  const HomeMain = () => {
    const images = [
    
        flowerImg,
        Img1,
        Img2
       
      ];
    return (
      <>
        <div className="relative z-10"><div className="w-full h-full flex justify-center items-center">
        <SimpleImageSlider
          width={1300}
          height={400}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={0.5}
          loop={true}
          autoPlay={true}

          style={{ maxWidth: "100%", maxHeight: "100%" }}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div>
        <StickyScrollRevealDemo/>
      </div></div>
      </>
    );
  };
  
  export default HomeMain;