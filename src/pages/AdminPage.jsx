import React from 'react';
import { Button, Container } from "react-bootstrap";
import PartRedaktor from '../Components/modals/PartRedaktor';
import CreatePartModel from '../Components/modals/CreatePartModel';


export default function AdminPage() {
    const [partRedaktorVisible, setPartRedaktorVisible] = React.useState(false);
    const [createModelVisible, setCreateModelVisible] = React.useState(false);

    return (
        <div className="adminPage">

            <h2 className="content__title">Админ панель СПЕЦАВТОБАТ</h2>

            <Container className="d-flex flex-column">
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setPartRedaktorVisible(true)}
                >
                    Добавить запчасть
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setCreateModelVisible(true)}
                >
                    Добавить модель
                </Button>
                <PartRedaktor show={partRedaktorVisible} onHide={() => setPartRedaktorVisible(false)} />
                <CreatePartModel show={createModelVisible} onHide={() => setCreateModelVisible(false)} />
            </Container>

        </div>
    )
}
