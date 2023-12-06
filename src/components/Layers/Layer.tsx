import { useEffect, useState } from "react";
import { Select } from "../common/Select/Select";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import { Layer } from "./layers.types";
import { useWallContext } from "../../context/Wall.context";
import { mockMaterialOptions } from "../../__mocks__/materialMocks";
import { numberFormat } from "../../utils/localization";

type WallLayerProps = React.HTMLProps<HTMLDivElement> & {
  layer: Layer;
};

export const WallLayer: React.FC<WallLayerProps> = ({ layer, className }) => {
  const { updateLayer, removeLayer } = useWallContext();
  const { id, material, thickness } = layer;
  const [price, setPrice] = useState<number>(material?.price ?? 0);

  useEffect(() => {
    setPrice(material?.price ?? 0);
  }, [material?.id]);

  return (
    <div className={className}>
      <Select
        name={`material${id}`}
        options={mockMaterialOptions}
        onChange={(e) => updateLayer(id, { material: e.target.value })}
      />
      <br></br>
      <Input
        placeholder="grosime"
        type="number"
        onChange={(e) =>
          updateLayer(id, {
            thickness: e.target.value ? parseFloat(e.target.value) : 0,
          })
        }
      />
      <Input
        placeholder="pret"
        type="number"
        value={price.toString()}
        onChange={(e) => setPrice(numberFormat(e.target.value))}
      />
      <Button onClick={() => removeLayer(id)}>-</Button>
      {material && (
        <span style={{ marginInline: "5px" }}>{`${material.price}lei`}</span>
      )}
      {material && thickness > 0 && (
        <span style={{ marginInline: "5px" }}>{`~${
          price * thickness
        }lei`}</span>
      )}
    </div>
  );
};
