import { useEffect } from "react";
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
import { Carousel } from "../../components/common/Carousel/Carousel";

export const Dashboard = () => {
  const { hash } = useLocation();
  const isMobile = useBreakPoint(SCREEN_BREAKPOINT_MOBILE);

  useEffect(() => {
    scrollElementIntoView(hash || "#logo");
  }, [hash]);

  return (
    <>
      <div className="home-section" id="#logo">
        <h1>LespeziArt Con</h1> <br />
        <span className="mx-xs">
          Izolații care rezistă timpului, la înălțimea așteptărilor tale!
        </span>
      </div>
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
      <div className="sisteme-section" id="#waterproofing">
        <Carousel carouselItems={CAROUSEL_ITEMS} />
      </div>
    </>
  );
};
