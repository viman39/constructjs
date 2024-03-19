import { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { CarouselProps } from "./carousel.types";
import { Button } from "../Button/Button";
import { CheckCircle, ChevronLeft, ChevronRight, Circle } from "react-feather";
import {
  SCREEN_BREAKPOINT_MOBILE,
  SCREEN_BREAKPOINT_TABLET,
  useBreakPoint,
} from "../../../utils/hooks/useScreenSize";

export const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  const isMobile = useBreakPoint(SCREEN_BREAKPOINT_MOBILE);
  const isTablet = useBreakPoint(SCREEN_BREAKPOINT_TABLET);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const itemsLength = carouselItems.length;

  const activeItem = carouselItems[activeItemIndex];
  const nextItem =
    activeItemIndex === itemsLength - 1
      ? carouselItems[0]
      : carouselItems[activeItemIndex + 1];
  const previousItem =
    activeItemIndex === 0
      ? carouselItems[itemsLength - 1]
      : carouselItems[activeItemIndex - 1];

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
        {!isMobile && <CarouselItem item={previousItem} />}
        <CarouselItem item={activeItem} />
        {!isTablet && <CarouselItem item={nextItem} />}
        <Button
          type="text"
          onClick={() => updateActiveItem(activeItemIndex + 1)}
          className="carouselButton carouselArrowRight"
        >
          <ChevronRight />
        </Button>
      </div>
      <div className="carouselFooter">
        {carouselItems.map((item, index) => (
          <Button
            type="text"
            onClick={() => updateActiveItem(index)}
            key={item.title}
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
