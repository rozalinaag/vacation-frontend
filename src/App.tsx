import Container from "@mui/material/Container";
import {Header} from "./components";
import {Home, CreateStatement, Registration, AddPost, Login} from "./pages";
import {Routes, Route} from 'react-router-dom'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthMe, selectIsAuth} from "./redux/slices/auth";
import './index.scss';
import MenuItems from './pages/Menu';

import { ConfigProvider } from 'antd'
import ru from 'antd/locale/ru_RU'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('ru')

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchAuthMe())
    }, [dispatch])

    return (
        <div>
            <ConfigProvider locale={ru}>
            <Header/>
            <Container maxWidth="xl">
                <div className={'containerVacation'}>
                    {isAuth && (
                        <MenuItems/>
                    )}
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/posts/:id" element={<CreateStatement/>}/>
                            <Route path="/add-post" element={<AddPost/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Registration/>}/>
                        </Routes>
                </div>
            </Container>
            </ConfigProvider>
        </div>
    );
}

export default App;
