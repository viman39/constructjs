import { Button } from "../Button/Button";
import "./carousel.scss";
import { CarouselItemProps } from "./carousel.types";

export const CarouselItem: React.FC<CarouselItemProps> = ({
  item: { title, imagePath, shortDescription },
}) => {
  return (
    <div className="carouselItem">
      <div>
        <img src={imagePath} alt={imagePath} width="100%" />
        <h3 className="my-xs">{title}</h3>
        <p>{shortDescription}</p>
      </div>
      <Button color="primary" className="m-sm">
        Mai multe
      </Button>
    </div>
  );
};
