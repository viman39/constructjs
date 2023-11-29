import { Select } from "../common/Select/Select";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import { Layer } from "./layers.types";

type WallLayerProps = {
  layer: Layer;
  materialOptions: { value: string; title: string }[];
  updateLayer: (id: number, data: any) => void;
  removeLayer: (id: number) => void;
};

export const WallLayer: React.FC<WallLayerProps> = ({
  layer,
  materialOptions,
  updateLayer,
  removeLayer,
}) => {
  const { id, material, thickness } = layer;
  return (
    <div>
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
  );
};
