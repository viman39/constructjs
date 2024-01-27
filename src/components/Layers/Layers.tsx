import { Button } from "../common/Button/Button";
import { WallLayer } from "./Layer";
import { useWallContext } from "../../context/Wall.context";
import { PlusCircle } from "react-feather";

export const Layers = () => {
  const { layers, addLayer } = useWallContext();

  return (
    <>
      {layers.map((layer) => (
        <WallLayer layer={layer} key={layer.id} className="mb-sm" />
      ))}
      <Button onClick={addLayer} color="primary" fullWidth={true}>
        <PlusCircle size="12px" /> Adauga strat
      </Button>
    </>
  );
};
