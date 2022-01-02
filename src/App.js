import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Container fluid>
        <Layout />
      </Container>
    </>
  );
}

export default App;
