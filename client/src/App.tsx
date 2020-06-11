import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Network from "./Components/network/Network";
import Community from "./Community";
import { Button } from "@material-ui/core";
import "./index.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <Link to="/"><img className="header image" src="header.png" alt="vis AI" /></Link>
                    <Link to="/network" >
                        <Button className="materialButton">New Network</Button>
                    </Link>
                </header>
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