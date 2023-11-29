import { Layers } from "./components/Layers/Layers";
import { WallContextProvider } from "./context/Wall.context";

function App() {
  return (
    <WallContextProvider>
      <Layers />
    </WallContextProvider>
  );
}

export default App;
