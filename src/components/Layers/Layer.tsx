import { Select } from "../common/Select/Select";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import { Layer } from "./layers.types";
import { useWallContext } from "../../context/Wall.context";
import { mockMaterialOptions } from "../../__mocks__/materialMocks";

type WallLayerProps = {
  layer: Layer;
};

export const WallLayer: React.FC<WallLayerProps> = ({ layer }) => {
  const { updateLayer, removeLayer } = useWallContext();
  const { id, material, thickness } = layer;

  return (
    <div>
      <Select
        name={`material${id}`}
        options={mockMaterialOptions}
        onChange={(e) => updateLayer(id, { material: e.target.value })}
      />
      <Input
        placeholder="grosime"
        type="number"
        onChange={(e) =>
          updateLayer(id, {
            thickness: e.target.value === "" ? 0 : parseFloat(e.target.value),
          })
        }
      />
      <Button onClick={() => removeLayer(id)}>-</Button>
      {material && (
        <span style={{ marginInline: "5px" }}>{`${material.price}lei`}</span>
      )}
      {material && thickness > 0 && (
        <span style={{ marginInline: "5px" }}>{`~${
          (material.price * thickness) / 10
        }lei`}</span>
      )}
    </div>
  );
};
