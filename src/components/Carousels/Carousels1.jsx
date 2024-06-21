import Carousel from "react-bootstrap/Carousel";
import "../../Style/Carousels/Carousels.css"

function Carousel1() {
  return (
    <Carousel >
      <Carousel.Item >
        <img
          src="/img/1slide1.gif"
          style={{ borderRadius: "50px", paddingLeft: "15px" }}
          width={1050}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item >
         <img src="/img/1slide2.avif" width={1050} id="" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/1slide3.avif" width={1050} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/img/1slide4.avif"
          style={{ borderRadius: "50px", paddingLeft: "15px" }}
          width={1050}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/1slide5.avif" width={1050} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/1slide6.avif" width={1050} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/1slide7.avif" width={1050} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/1slide8.avif" width={1050} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
