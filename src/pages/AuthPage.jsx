import React from 'react';
import { Card, Form, Button } from "react-bootstrap";

export default function AuthPage() {
    return (
        <div className="container">
            <div className="loginPage">
                <Card style={{ width: 320, height: 200 }}>
                    <h4 className='m-auto'>Авторизация</h4>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш email..."
                        /* value={email}
                         onChange={e => setEmail(e.target.value)} */
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш пароль..."
                        /*  value={password}
                          onChange={e => setPassword(e.target.value)}
                          type="password" */
                        />
                        <Button
                            variant={"outline-dark"}
                            className='mt-3'
                        // onClick={click}
                        >
                            Войти
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    )
}
