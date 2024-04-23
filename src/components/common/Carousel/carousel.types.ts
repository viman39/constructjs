export type CarouselItemType = {
  id: number;
  title: string;
  longDescription?: string;
  shortDescription?: string;
  imagePath?: string;
};

export type CarouselItemProps = {
  children: React.ReactNode;
};

export type CarouselProps = {
  children: React.ReactNode[];
  carouselLength: number;
};
