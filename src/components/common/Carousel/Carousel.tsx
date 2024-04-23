import { BaseSyntheticEvent, useEffect, useState } from "react";
import { CarouselItemProps, CarouselProps } from "./carousel.types";
import { Button } from "../Button/Button";
import { CheckCircle, ChevronLeft, ChevronRight, Circle } from "react-feather";
import {
  SCREEN_BREAKPOINT_TABLET,
  useBreakPoint,
} from "../../../utils/hooks/useScreenSize";
import "./carousel.scss";

export const Carousel: React.FC<CarouselProps> = ({
  children,
  carouselLength,
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const itemsLength = children.length;

  const isTablet = useBreakPoint(SCREEN_BREAKPOINT_TABLET);

  useEffect(() => {
    const distance = touchEnd - touchStart;

    if (distance > 50) {
      updateActiveItem(activeItemIndex - 1);
    } else if (distance < -50) {
      updateActiveItem(activeItemIndex + 1);
    }
  }, [touchEnd]);

  const handleTouchStart = (e: any) => {
    setTouchStart(Math.floor(e.changedTouches[0].screenX));
  };

  const handleTouchEnd = (e: any) => {
    setTouchEnd(Math.floor(e.changedTouches[0].screenX));
  };

  const updateActiveItem = (index: number) => {
    if (index >= itemsLength) {
      setActiveItemIndex(0);
    } else if (index < 0) {
      setActiveItemIndex(itemsLength - 1);
    } else {
      setActiveItemIndex(index);
    }
  };

  return (
    <div className="carousel">
      <div className="carouselWrapper">
        <Button
          type="text"
          onClick={() => updateActiveItem(activeItemIndex - 1)}
          className="carouselButton carouselArrowLeft"
        >
          <ChevronLeft />
        </Button>
        <div
          className="carouselBody"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {!isTablet && (
            <div
              className="carouselItem-wrapper"
              style={{
                translate: `${-100 * activeItemIndex}%`,
              }}
              key={-1}
            >
              {children[children.length - 1]}
            </div>
          )}
          {children.map((item, index) => (
            <div
              className="carouselItem-wrapper"
              style={{
                translate: `${-100 * activeItemIndex}%`,
              }}
              key={index}
            >
              {item}
            </div>
          ))}
          <div
            className="carouselItem-wrapper"
            style={{
              translate: `${-100 * activeItemIndex}%`,
            }}
            key={children.length}
          >
            {children[0]}
          </div>
        </div>
        <Button
          type="text"
          onClick={() => updateActiveItem(activeItemIndex + 1)}
          className="carouselButton carouselArrowRight"
        >
          <ChevronRight />
        </Button>
      </div>
      <div className="carouselFooter my-sm">
        {[...Array(carouselLength)].map((_, index) => (
          <Button
            type="text"
            onClick={() => updateActiveItem(index)}
            key={index}
          >
            {index === activeItemIndex % carouselLength ? (
              <CheckCircle
                width="14px"
                height="14px"
                className="text-logo-primary"
              />
            ) : (
              <Circle width="12px" height="12px" />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className="carouselItem">{children}</div>;
};
