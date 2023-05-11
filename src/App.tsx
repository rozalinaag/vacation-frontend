import Container from "@mui/material/Container";
import {Header} from "./components";
import {Home, FullPost, Registration, AddPost, Login} from "./pages";
import {Routes, Route} from 'react-router-dom'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthMe, selectIsAuth} from "./redux/slices/auth";

function App() {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchAuthMe())
    },[])

    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/posts/:id" element={<FullPost/>}/>
                    <Route path="/add-post" element={<AddPost/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Registration/>}/>
                </Routes>
            </Container>
        </div>
    );
}

export default App;
