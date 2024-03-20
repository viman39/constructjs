import { useState } from "react";
import { CarouselItemProps, CarouselProps } from "./carousel.types";
import { Button } from "../Button/Button";
import { CheckCircle, ChevronLeft, ChevronRight, Circle } from "react-feather";
import {
  SCREEN_BREAKPOINT_MOBILE,
  SCREEN_BREAKPOINT_TABLET,
  useBreakPoint,
} from "../../../utils/hooks/useScreenSize";
import "./carousel.scss";

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const isMobile = useBreakPoint(SCREEN_BREAKPOINT_MOBILE);
  const isTablet = useBreakPoint(SCREEN_BREAKPOINT_TABLET);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const itemsLength = children.length;

  const activeItem = children[activeItemIndex];
  const nextItem =
    activeItemIndex === itemsLength - 1
      ? children[0]
      : children[activeItemIndex + 1];
  const previousItem =
    activeItemIndex === 0
      ? children[itemsLength - 1]
      : children[activeItemIndex - 1];

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
      <div className="carouselBody">
        <Button
          type="text"
          onClick={() => updateActiveItem(activeItemIndex - 1)}
          className="carouselButton carouselArrowLeft"
        >
          <ChevronLeft />
        </Button>
        {!isTablet && previousItem}
        {activeItem}
        {!isMobile && nextItem}
        <Button
          type="text"
          onClick={() => updateActiveItem(activeItemIndex + 1)}
          className="carouselButton carouselArrowRight"
        >
          <ChevronRight />
        </Button>
      </div>
      <div className="carouselFooter">
        {children.map((_, index) => (
          <Button
            type="text"
            onClick={() => updateActiveItem(index)}
            key={index}
          >
            {index === activeItemIndex ? (
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
