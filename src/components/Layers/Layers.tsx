import { Select } from "../common/Select/Select";
import { Input } from "../common/Input/Input";
import { useState } from "react";
import { mockMaterials } from "../../__mocks__/materialMocks";
import { Button } from "../common/Button/Button";
import { Wall } from "../Wall/Wall";

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

export const Layers = () => {
  const [layers, setLayers] = useState<Layer[]>([]);
  const materialOptions = mockMaterials.map((material) => ({
    value: material.name,
    title: material.name,
  }));

  console.log({ layers });

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

  return (
    <>
      {layers.map(({ id, material, thickness }) => (
        <div key={id}>
          <Select
            name={`material${id}`}
            options={materialOptions}
            onChange={(e) => updateLayer(id, { material: e.target.value })}
          />
          <Input
            placeholder="thickness"
            type="number"
            onChange={(e) =>
              updateLayer(id, {
                thickness: e.target.value === "" ? 0 : e.target.value,
              })
            }
          />
          {material && thickness > 0 && (
            <span style={{ marginInline: "5px" }}>{`~${
              (material.price * thickness) / 10
            }lei`}</span>
          )}
          <Button onClick={() => removeLayer(id)}>-</Button>
        </div>
      ))}
      <Button
        onClick={() => {
          setLayers((old) => [
            ...old,
            {
              id: old.length > 0 ? old[old.length - 1].id + 1 : 1,
              material: undefined,
              thickness: 0,
            },
          ]);
        }}
      >
        +
      </Button>
      <Wall layers={layers} />
    </>
  );
};
