import React from 'react';
import { createModelPart } from '../../http/PartsApi';
import { Button, Dropdown, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const missionList = [
    { name: "Колесный экскаватор" },
    { name: "Гусеничный экскаватор" },
    { name: "Фронтальный погрузчик DL" },
    { name: "Фронтальный погрузчик SD" },
    { name: "Фронтальный погрузчик MEGA" }
]

export default function CreatePartModel({ show, onHide }) {

    const [name, setName] = React.useState('');
    const [mission, setMission] = React.useState('');
    const [file, setFile] = React.useState(null);

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addTypePart = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('mission', mission)
        formData.append('urlpic', file)
        createModelPart(formData).then(formData => onHide())
        setName('');
        setMission('');
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить модель Develon(Doosan)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название модели"
                    />
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{mission || "Выберите тип техники"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {missionList.map((item) =>
                                <Dropdown.Item
                                    onClick={() => setMission(item.name)}
                                    key={item.name}
                                >
                                    {item.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-dark" onClick={addTypePart}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}