import NavBar from "./NavBar";
import { Row, Col, Card, CardBody } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Menu from "./Menu";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GridToList } from "./GridToList";
import { RoutesComponent } from "./RoutesComponent";
import { useState } from "react";

function App() {
  const [data, setData] = useState(3);

  const updateData = (da) => {
    setData(da);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Row className="row">
          <Col className="col" md={3}>
            <h1>
              <Menu />
            </h1>
          </Col>

          <Col md={8}>
            <GridToList fn={updateData} />

            <RoutesComponent data={data} />
          </Col>
        </Row>
      </div>
    </BrowserRouter>
  );
}

export default App;
