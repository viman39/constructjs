import { useWallContext } from "../../context/Wall.context";
import "./wall.scss";

export const Wall: React.FC = () => {
  const { layers } = useWallContext();

  return (
    <div className="wall">
      {layers.map(
        ({ id, thickness, material }) =>
          thickness != 0 &&
          material && (
            <div
              style={{
                height: `${thickness}px`,
                width: "100%",
                background: material?.color,
              }}
              key={id}
            ></div>
          )
      )}
    </div>
  );
};
