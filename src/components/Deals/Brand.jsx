import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Brand = () => {
  return (
    <div>
      <div>
        <img
          src="/img/brand-watchlist.avif"
          style={{ paddingLeft: "16px" }}
          width={1051}
          alt=""
        />
      </div>
      <div className="d-flex ms-3 " style={{ flexWrap: "wrap" }}>
        <img src="/img/brand1.avif" width={259} height={320} alt="" />
        <img src="/img/brand2.avif" width={259} height={320} alt="" />
        <img src="/img/brand3.avif" width={259} height={320} alt="" />
        <img src="/img/brand4.avif" width={258} height={320} alt="" />
        <img src="/img/brand5.avif" width={259} height={320} alt="" />
        <img src="/img/brand6.avif" width={259} height={320} alt="" />
        <img src="/img/brand7.avif" width={259} height={320} alt="" />
        <img src="/img/brand8.avif" width={258} height={320} alt="" />
        <img src="/img/brand9.avif" width={259} height={320} alt="" />
        <img src="/img/brand10.avif" width={259} height={320} alt="" />
        <img src="/img/brand11.avif" width={259} height={320} alt="" />
        <img src="/img/brand12.avif" width={258} height={320} alt="" />
      </div>
      <div>
        <img
          src="/img/gift-card.gif"
          style={{ paddingLeft: "16px" }}
          width={1051}
          alt=""
        />
      </div>
      <Carousel>
        <Carousel.Item>
          <img src="/img/discount2.avif" width={1050} id="" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/img/discount1.avif"
            style={{ borderRadius: "50px", paddingLeft: "15px" }}
            width={1050}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/discount3.avif" width={1050} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Brand;
