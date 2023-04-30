import Container from "@mui/material/Container";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import {Routes, Route} from 'react-router-dom'
import React from "react";

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element = {<Home/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
