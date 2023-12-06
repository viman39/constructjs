import { Layers } from "../../components/Layers/Layers";
import { Wall } from "../../components/Wall/Wall";
import { WallContextProvider } from "../../context/Wall.context";

export const Calculator = () => {
  return (
    <div>
      <WallContextProvider>
        <Layers></Layers>
        <Wall className="mt-md"></Wall>
      </WallContextProvider>
    </div>
  );
};
