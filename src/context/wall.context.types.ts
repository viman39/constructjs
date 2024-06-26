import { Layer } from "../pages/Calculator/calculator.types";

export type WallContextProviderProps = {
  children: React.ReactNode;
};

export type UpdateLayerData = {
  thickness?: number;
  material?: string;
};

export type WallContextState = {
  layers: Layer[];
  addLayer: () => void;
  updateLayer: (id: number, data: UpdateLayerData) => void;
  removeLayer: (id: number) => void;
};
