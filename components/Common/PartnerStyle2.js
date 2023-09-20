import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: false,
  loop: true,
  margin: 25,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 6,
    },
  },
};

const PartnerStyle2 = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div style={{ margin: "5rem 0" }}></div>
    </>
  );
};

export default PartnerStyle2;
