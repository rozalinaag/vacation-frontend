import Container from "@mui/material/Container";
import {Header} from "./components";
import {Home, FullPost, Registration, AddPost, Login} from "./pages";
import {Routes, Route} from 'react-router-dom'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthMe, selectIsAuth} from "./redux/slices/auth";
import './index.scss';
import MenuItems from './pages/Menu';

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchAuthMe())
    }, [])

    return (
        <div>
            <Header/>
            <Container maxWidth="xl">
                <div className={'containerVacation'}>
                    {isAuth && (
                        <MenuItems/>
                    )}
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/posts/:id" element={<FullPost/>}/>
                            <Route path="/add-post" element={<AddPost/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Registration/>}/>
                        </Routes>
                </div>
            </Container>
        </div>
    );
}

export default App;
