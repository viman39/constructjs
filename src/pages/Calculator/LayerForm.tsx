import { useEffect, useState } from "react";
import { useWallContext } from "../../context/Wall.context";
import { mockMaterialOptions } from "../../__mocks__/materialMocks";
import { numberFormat } from "../../utils/localization";
import { Select } from "../../components/common/Select/Select";
import { Input } from "../../components/common/Input/Input";
import { Button } from "../../components/common/Button/Button";
import { Layer } from "./calculator.types";
import "./calculator.scss";

type LayerFormProps = React.HTMLProps<HTMLDivElement> & {
  layer: Layer;
};

export const LayerForm: React.FC<LayerFormProps> = ({ layer, className }) => {
  const { updateLayer, removeLayer } = useWallContext();
  const { id, material, thickness } = layer;
  const [price, setPrice] = useState(material?.price ?? 0);

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
      <Input
        className="input-width"
        placeholder="grosime"
        type="number"
        onChange={(e) =>
          updateLayer(id, {
            thickness: e.target.value ? parseFloat(e.target.value) : 0,
          })
        }
      />
      <Input
        className="input-width"
        placeholder="pret"
        type="number"
        value={price.toString()}
        onChange={(e) => setPrice(numberFormat(e.target.value))}
      />
      <Button onClick={() => removeLayer(id)}>-</Button>
      {material && <span className="mx-xs">{`${material.price}lei`}</span>}
      {material && thickness > 0 && (
        <span className="mx-xs">{`~${price * thickness}lei`}</span>
      )}
    </div>
  );
};
