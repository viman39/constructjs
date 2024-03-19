export type CarouselItemType = {
  title: string;
  longDescription?: string;
  shortDescription?: string;
  imagePath?: string;
};

export type CarouselItemProps = {
  item: CarouselItemType;
};

export type CarouselProps = {
  carouselItems: CarouselItemType[];
};
