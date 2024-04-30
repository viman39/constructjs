import { useState, createContext, useContext } from "react";
import { mockMaterials } from "../__mocks__/materialMocks";
import { Layer } from "../pages/Calculator/calculator.types";
import {
  UpdateLayerData,
  WallContextProviderProps,
  WallContextState,
} from "./wall.context.types";

const WallContext = createContext<WallContextState | null>(null);

export const WallContextProvider: React.FC<WallContextProviderProps> = ({
  children,
}) => {
  const [layers, setLayers] = useState<Layer[]>([]);

  const addLayer = () => {
    setLayers((old) => [
      ...old,
      {
        id: old.length > 0 ? old[old.length - 1].id + 1 : 1,
        material: mockMaterials[0],
        thickness: 0,
      },
    ]);
  };

  const updateLayer = (id: number, data: UpdateLayerData) => {
    setLayers((old) => {
      const newLayers = [...old];
      const layerIndex = newLayers.findIndex((item) => item.id === id);

      if (data.thickness !== undefined)
        newLayers[layerIndex].thickness = data.thickness;
      if (data?.material) {
        newLayers[layerIndex].material = mockMaterials.find(
          (material) => material.id === data?.material
        );
      }

      return newLayers;
    });
  };

  const removeLayer = (id: number) => {
    setLayers(layers.filter((layer) => layer.id !== id));
  };

  return (
    <WallContext.Provider
      value={{ layers, addLayer, updateLayer, removeLayer }}
    >
      {children}
    </WallContext.Provider>
  );
};

export const useWallContext = (): WallContextState => {
  const context = useContext(WallContext);
  if (!context) {
    throw new Error("useWallContect must be used within WallContextProvider");
  }

  return context;
};
