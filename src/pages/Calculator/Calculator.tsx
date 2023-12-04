import { Layers } from "../../components/Layers/Layers";
import { Wall } from "../../components/Wall/Wall";
import { WallContextProvider } from "../../context/Wall.context";

export const Calculator = () => {
  return (
    <div>
      <WallContextProvider>
        <Layers></Layers>
        <Wall></Wall>
      </WallContextProvider>
    </div>
  );
};
