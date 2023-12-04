import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router></Router>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
