import Carousel from "react-bootstrap/Carousel";

function Carousels2() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="/img/discount1.avif"
            style={{ borderRadius: "50px", paddingLeft: "15px" }}
            width={1050}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/discount2.avif" width={1050} id="" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/discount3.avif" width={1050} alt="" />
        </Carousel.Item>
      </Carousel>
      <div>
        <img src="/img/discount4.avif" width={1050} alt="" />
      </div>
      <div>
        <img src="/img/fee-delivery.avif" width={1050} alt="" />
      </div>
      <div>
        <img src="/img/toy.avif" width={1050} alt="" />
      </div>
      <div>
        <img src="/img/Brand.avif" width={1050} alt="" />
      </div>
    </div>
  );
}

export default Carousels2;
