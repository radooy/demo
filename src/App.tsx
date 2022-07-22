import { Container } from "@mui/material";
import Navigation from "./components/Navigation/Navigation";
import PriceGetter from "./components/PriceGetter/PriceGetter";
import PriceModal from "./components/PriceModal/PriceModal";

function App() {
  return (
    <Container>
      <Navigation />
      <PriceGetter />
      <PriceModal />
    </Container>
  );
}

export default App;
