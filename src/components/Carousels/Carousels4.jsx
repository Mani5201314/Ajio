import Carousel from "react-bootstrap/Carousel";
import "../../Style/Carousels/Carousels.css";

function Carousel4() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="/img/3slide1.avif"
          style={{ borderRadius: "50px", paddingLeft: "15px" }}
          width={1050}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/3slide2.avif" width={1050} id="" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/3slide3.avif" width={1050} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/img/3slide4.avif"
          style={{ borderRadius: "50px", paddingLeft: "15px" }}
          width={1050}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/3slide5.avif" width={1050} alt="" />
      </Carousel.Item>
    
    </Carousel>
  );
}

export default Carousel4;
