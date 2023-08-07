import React, { useState } from 'react';
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { loggin } from "../http/AdminAPI";
import { HOME_ROUTE, ADMIN_ROUTE } from '../utils/consts';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slises/userSlice';

export default function AuthPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    const click = async () => {
        try {
            let user;
            user = await loggin(login, password);
            dispatch(setUser(user));
            navigate(ADMIN_ROUTE);
        } catch (e) {
            alert("Ошибка авторизации")//(e.response.data.message)
            navigate(HOME_ROUTE);
        }
    }

    return (
        <div className="container">
            <div className="loginPage">
                <Card style={{ width: 320, height: 200 }}>
                    <h4 className='m-auto'>Авторизация</h4>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите логин..."
                            autoComplete="on"
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите пароль..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            autoComplete="on"
                        />
                        <Button
                            variant={"outline-dark"}
                            className='mt-3'
                            onClick={click}
                        >
                            Войти
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    )
}
