import { WallProps } from "./wall.types";
import "./wall.scss";

export const Wall: React.FC<WallProps> = ({ layers }) => {
  return (
    <div className="wall">
      {layers.map((layer, index) => (
        <div
          style={{
            height: `${layer.thickness}px`,
            width: "100%",
            background: layer.material?.color,
          }}
          key={index}
        ></div>
      ))}
    </div>
  );
};
