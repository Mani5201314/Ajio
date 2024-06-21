
import Carousel from "react-bootstrap/Carousel";
import "../../Style/Carousels/Carousels.css";

function Carousel5() {
    return (
      <div>
        <div>
          <img src="/img/Today's.avif" width={1050} alt="" />
        </div>
        
        <Carousel>
          <Carousel.Item>
            <img
              src="/img/4slide1.avif"
              style={{ borderRadius: "50px", paddingLeft: "15px" }}
              width={1050}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/img/4slide2.avif" width={1050} id="" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/img/4slide3.avif" width={1050} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/4slide4.avif"
              style={{ borderRadius: "50px", paddingLeft: "15px" }}
              width={1050}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/img/4slide5.avif" width={1050} alt="" />
          </Carousel.Item>
       
        </Carousel>
      </div>
    );
}

export default Carousel5;

