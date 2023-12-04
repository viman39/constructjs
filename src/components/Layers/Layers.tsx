import { Button } from "../common/Button/Button";
import { Wall } from "../Wall/Wall";
import { WallLayer } from "./Layer";
import { useWallContext } from "../../context/Wall.context";

export const Layers = () => {
  const { layers, addLayer } = useWallContext();

  return (
    <>
      {layers.map((layer) => (
        <WallLayer layer={layer} key={layer.id} />
      ))}
      <Button onClick={addLayer}>+</Button>
    </>
  );
};
