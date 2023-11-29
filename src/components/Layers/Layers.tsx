import { useState } from "react";
import { mockMaterials } from "../../__mocks__/materialMocks";
import { Button } from "../common/Button/Button";
import { Wall } from "../Wall/Wall";
import { Layer } from "./layers.types";
import { WallLayer } from "./Layer";

export const Layers = () => {
  const [layers, setLayers] = useState<Layer[]>([]);
  const materialOptions = mockMaterials.map((material) => ({
    value: material.name,
    title: material.name,
  }));

  const removeLayer = (id: number) => {
    setLayers(layers.filter((layer) => layer.id !== id));
  };

  const updateLayer = (id: number, data: any) => {
    setLayers((old) => {
      const lay = [...old];
      const index = lay.findIndex((item) => item.id === id);
      if (data.thickness !== undefined) lay[index].thickness = data.thickness;
      if (data?.material) {
        lay[index].material = mockMaterials.find(
          (item) => item.name === data?.material
        );
      }

      return lay;
    });

    console.log({ id, data });
  };

  const addLayerHandler = () => {
    setLayers((old) => [
      ...old,
      {
        id: old.length > 0 ? old[old.length - 1].id + 1 : 1,
        material: undefined,
        thickness: 0,
      },
    ]);
  };

  return (
    <>
      {layers.map((layer) => (
        <WallLayer
          layer={layer}
          materialOptions={materialOptions}
          removeLayer={removeLayer}
          updateLayer={updateLayer}
        />
      ))}
      <Button onClick={addLayerHandler}>+</Button>
      <Wall layers={layers} />
    </>
  );
};
