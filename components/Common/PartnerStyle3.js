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

const PartnerStyle3 = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="partner-area bg-f9f9f9 ptb-100">
        <div className="container">
          <div className="partner-title">Algumas empresas já cadastradas:</div>

          {display ? (
            <OwlCarousel
              className="partner-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="partner-item">
                <img src="/images/grannobre.jpg" alt="partner" />
              </div>
              <div className="partner-item">
                <img src="/images/elite.png" alt="partner" />
              </div>
              <div className="partner-item">
                <img src="/images/aguasclaras.jpg" alt="partner" />
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default PartnerStyle3;
