import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Main />
            </Box>
        </Router>
    );
};

export default App;
