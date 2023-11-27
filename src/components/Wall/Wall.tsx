import { Layer } from "../Layers/Layers";
import "./wall.scss";

type WallProps = {
  layers: Layer[];
};

export const Wall: React.FC<WallProps> = ({ layers }) => {
  return (
    <div className="wall">
      {layers.map((layer, index) => (
        <div
          className={
            layer.material?.color ? `layer-${layer.material?.color}` : ""
          }
          style={{ height: `${layer.thickness}px` }}
          key={index}
        ></div>
      ))}
    </div>
  );
};
