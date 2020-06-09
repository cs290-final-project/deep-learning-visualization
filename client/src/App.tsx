import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Network from "./Components/network/Network";
import Community from "./Community";

function App() {
    return (
        <BrowserRouter>
            <div className="App" style={{ backgroundColor: "#eee" }}>
                <h1>Vis-AI (header a Work in Progress)</h1>
                <Link to="/">Home   </Link>
                <Link to="/network">New Network</Link>
                <Switch>
                    <Route path="/network">
                        <DndProvider backend={Backend}>
                            <Network />
                        </DndProvider>
                    </Route>
                    <Route path="/" component={Community} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;