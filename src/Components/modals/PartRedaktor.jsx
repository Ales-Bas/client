import React from 'react';
import { fetchModelList } from '../../redux/slises/modelFilterSlice';
import { setSubTypePart } from '../../redux/slises/modelSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { read, utils } from 'xlsx';
import { createTypePart } from '../../http/PartsApi';
import { Button, Dropdown, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function PartRedaktor({ show, onHide }) {

    const dispatch = useDispatch();
    const { modelList } = useSelector((state) => state.modelSideBar);
    const { subTypePart } = useSelector((state) => state.models);
    const [name, setName] = React.useState('');
    const [file, setFile] = React.useState(null);
    const [modelnameId, setModelnameId] = React.useState([]);
    const [subtypepartId, setsubtypepartId] = React.useState([]);
    const [partinfo, setPartinfo] = React.useState([]);

    // получение списка моделей
    const getModelList = async () => {
        dispatch(fetchModelList({}));
    };

    React.useEffect(() => {
        getModelList();
        axios.get(`https://web-prod.online/api/subtype`) //https://web-prod.online/api/subtype
            .then((res) => {
                dispatch(setSubTypePart(res.data));
            });
    }, []);

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addTypePart = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('imgurl', file)
        formData.append('modelnameId', modelnameId.id)
        formData.append('subtypepartId', subtypepartId.id)
        formData.append('partinfo', JSON.stringify(partinfo))
        console.log(formData, file, partinfo)
        createTypePart(formData).then(formData => onHide())
        setName('');
        setModelnameId([]);
        setsubtypepartId([]);
    }

    async function handleFile(e) {
        let file = e.target.files[0];
        /* get raw data */
        const data = await file.arrayBuffer();
        /* data is an ArrayBuffer */
        const wb = read(data);
        const ws = wb.Sheets[wb.SheetNames[0]];
        const jsonData = utils.sheet_to_json(ws);
        setPartinfo(jsonData);
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить агрегат Develon(Doosan)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название узла"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{modelnameId.name || "Выберите модель"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {modelList.map((model) =>
                                <Dropdown.Item
                                    onClick={() => setModelnameId(model)}
                                    key={model.id}
                                >
                                    {model.name} {model.mission}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{subtypepartId.name || "Выберите раздел запчастей"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {subTypePart.map(typepart =>
                                <Dropdown.Item
                                    onClick={() => setsubtypepartId(typepart)}
                                    key={typepart.id}
                                >
                                    {typepart.name} для {typepart.mission}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr />
                </Form>

            </Modal.Body>
            <div className="ep">
                <input type="file" onChange={(e) => handleFile(e)} />

            </div>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-dark" onClick={addTypePart}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}
