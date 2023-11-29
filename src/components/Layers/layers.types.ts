export type Material = {
  name: string;
  price: number;
  color?: string;
};

export type Layer = {
  id: number;
  material?: Material;
  thickness: number;
};
