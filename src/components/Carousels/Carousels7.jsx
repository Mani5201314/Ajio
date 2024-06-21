import Carousel from "react-bootstrap/Carousel";
import "../../Style/Carousels/Carousels.css";

function Carousel7() {
  return (
    <div>
      <div>
        <img src="/img/hot.avif" width={1050} alt="" />
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            src="/img/6slide1.avif"
            style={{ borderRadius: "50px", paddingLeft: "15px" }}
            width={1050}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/6slide2.avif" width={1050} id="" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/6slide3.avif" width={1050} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/img/6slide4.avif"
            style={{ borderRadius: "50px", paddingLeft: "15px" }}
            width={1050}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/6slide5.avif" width={1050} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel7;
