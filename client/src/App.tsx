import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Network from "./Components/network/Network";
import Community from "./Community";
import { Button } from "@material-ui/core";
import Helmet from "react-helmet";

const buttonStyle = {
    display: "inline-block",
    float: "right",
    color: "#fff",
    backgroundColor: "#e8243c",
    margin: 16,
} as React.CSSProperties;

const imgStyle = {
    height: "100%",
    marginLeft: 15,
}

function App() {
    return (
        <BrowserRouter>
            <div className="App" style={{ backgroundColor: "#2b2c44", color: "#fff" }}>
                <header style={{ height: 64 }}>
                    <Link to="/"><img src="header.png" alt="vis AI" style={imgStyle} /></Link>
                    <Link to="/network" >
                        <Button variant="contained" size="large" style={buttonStyle}>New Network</Button>
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