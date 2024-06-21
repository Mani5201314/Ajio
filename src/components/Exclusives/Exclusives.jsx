import React from 'react'

const Exclusives = () => {
  return (
    <div>
      <div>
        <img
          src="/img/Ajio-exclusives.avif"
          style={{ paddingLeft: "16px" }}
          width={1050}
          alt=""
        />
      </div>
      <div className="d-flex ms-3">
        <img src="/img/Ajio-discount1.avif" width={259} height={320} alt="" />
        <img src="/img/Ajio-discount2.avif" width={259} height={320} alt="" />
        <img src="/img/Ajio-discount3.avif" width={259} height={320} alt="" />
        <img src="/img/Ajio-discount4.avif" width={258} height={320} alt="" />
      </div>
      <div>
        <img src="/img/Today's.avif" width={1050} alt="" />
      </div>
    </div>
  );
}

export default Exclusives