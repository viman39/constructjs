export type CarouselItemType = {
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
};
