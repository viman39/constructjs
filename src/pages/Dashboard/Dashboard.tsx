import { memo, useEffect } from "react";
import "./dashboard.scss";
import { scrollElementIntoView } from "../../utils/dom";
import { useLocation } from "react-router-dom";
import {
  DoubleTriangleLeft,
  DoubleTriangleRight,
} from "../../components/common/Icons/Icons";
import { ABOUT_US, CAROUSEL_ITEMS } from "./dashboard.constants";
import {
  SCREEN_BREAKPOINT_MOBILE,
  useBreakPoint,
} from "../../utils/hooks/useScreenSize";
import {
  Carousel,
  CarouselItem,
} from "../../components/common/Carousel/Carousel";
import { Button } from "../../components/common/Button/Button";
import {
  FlipCard,
  FlipCardBack,
  FlipCardFront,
} from "../../components/common/FlipCard/FlipCard";

const HomeSection = memo(() => (
  <div className="home-section" id="#logo">
    <h1>LespeziArt Con</h1> <br />
    <span className="mx-xs">
      Izolații care rezistă timpului, la înălțimea așteptărilor tale!
    </span>
  </div>
));

const AboutUsSection = () => {
  const isMobile = useBreakPoint(SCREEN_BREAKPOINT_MOBILE);

  return (
    <div className="aboutus-section" id="#aboutUs">
      {ABOUT_US.map(({ title, description, image }, index) =>
        index % 2 === 0 ? (
          <>
            {isMobile && <DoubleTriangleRight image={image} />}
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            {!isMobile && <DoubleTriangleRight image={image} />}
          </>
        ) : (
          <>
            <DoubleTriangleLeft image={image} />
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </>
        )
      )}
    </div>
  );
};

const WaterproofingSection = () => (
  <div className="sisteme-section" id="#waterproofing">
    <Carousel carouselLength={CAROUSEL_ITEMS.length}>
      {CAROUSEL_ITEMS.map(
        ({ imagePath, title, shortDescription, longDescription, id }) => (
          <CarouselItem key={id}>
            <FlipCard className="flip-card-shadow">
              <FlipCardBack>
                <div className="dashboard-flip-card-back">
                  <p>{longDescription}</p>
                </div>
              </FlipCardBack>
              <FlipCardFront>
                <div className="dashboard-flip-card-front">
                  <div>
                    <img src={imagePath} alt={imagePath} width="100%" />
                    <h3 className="my-xs">{title}</h3>
                    <p>{shortDescription}</p>
                  </div>
                  <Button color="primary" className="m-sm">
                    Mai multe
                  </Button>
                </div>
              </FlipCardFront>
            </FlipCard>
          </CarouselItem>
        )
      )}
    </Carousel>
  </div>
);

export const Dashboard = () => {
  const { hash } = useLocation();

  useEffect(() => {
    scrollElementIntoView(hash || "#logo");
  }, [hash]);

  return (
    <>
      <HomeSection />
      <AboutUsSection />
      <WaterproofingSection />
    </>
  );
};
