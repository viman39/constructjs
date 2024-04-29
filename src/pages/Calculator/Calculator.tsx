import { WallLayer } from "../../components/Layers/Layer";
import { Wall } from "../../components/Wall/Wall";
import { Button } from "../../components/common/Button/Button";
import { WallContextProvider } from "../../context/Wall.context";
import { useWallContext } from "../../context/Wall.context";
import { PlusCircle } from "react-feather";
import { Card } from "../../components/common/Card/Card";
import "./calculator.scss";

const Layers = () => {
  const { layers, addLayer } = useWallContext();

  return (
    <>
      {layers.map((layer) => (
        <WallLayer layer={layer} key={layer.id} className="mb-sm" />
      ))}
      <Button onClick={addLayer} color="primary" fullWidth={true}>
        <div className="my-xs">
          <PlusCircle size="12px" /> Adauga strat
        </div>
      </Button>
    </>
  );
};

export const Calculator = () => {
  return (
    <>
      <Card className="m-sm">
        <h3 className="m-md">Aceasta pagina va ajuta la calule</h3>
      </Card>
      <WallContextProvider>
        <div className="calculator m-sm">
          <Layers></Layers>
          <Wall className="mt-md"></Wall>
        </div>
      </WallContextProvider>
    </>
  );
};
