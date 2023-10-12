import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import { Form, Row } from "react-bootstrap";
import * as formik from 'formik';
import * as Yup from 'yup';
import styles from './Connection.module.scss';

const nameRegExp = /^[а-яё -]+$/i
const phoneRegExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/
const comentRegExp = /^[?!,.()а-яА-ЯёЁ0-9\s]+$/

export default function ConnectionModal({ show, onHide }) {
    const { Formik } = formik;
    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className={styles.headerStyle}>
                    Оставьте свои контактные данные и мы свяжемся с вами
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        email: '',
                        coment: '',
                        acceptedTerms: false, // added for our checkbox
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(20, 'Must be 15 characters or less')
                            .matches(nameRegExp, { message: "Используйте буквы русского алфавита" })
                            .required('Вы не ввели имя'),
                        phone: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .matches(phoneRegExp, { message: "Это поле содержит только цифры" })
                            .required('Вы не ввели телефон'),
                        email: Yup.string()
                            .email('Некорректно введен адрес почты')
                            .required('Вы не ввели почту'),
                        coment: Yup.string()
                            .matches(comentRegExp, { message: "Используйте буквы русского алфавита" }),
                        acceptedTerms: Yup.boolean()
                            .required('Примите согласие на обработку данных')
                            .oneOf([true], 'Примите согласие на обработку данных'),
                    })}
                    onSubmit={(values) => {
                        setTimeout(() => {
                            onHide(onHide)
                            axios.post(`https://web-prod.online/api/connection`, values)
                                .then((res) => {
                                    alert('Ваше обращение успешно добавлено.');
                                });
                        }, 400);
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit} className={styles.modalStyle}>
                            <Row className="mb-3">
                                <Form.Group
                                    controlId="validationFormik101"
                                    className="position-relative"
                                >
                                    <Form.Label>Ваше имя</Form.Label>
                                    <Form.Control
                                        label="Имя"
                                        name="name"
                                        type="text"
                                        placeholder="Введите имя"
                                        isInvalid={!!errors.name}
                                        isValid={touched.name && !errors.name}
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    controlId="validationFormik102"
                                    className="position-relative"
                                >
                                    <Form.Label>Телефон</Form.Label>
                                    <Form.Control
                                        label="Телефон"
                                        name="phone"
                                        type="text"
                                        placeholder="Номер телефона в любом формате"
                                        value={values.phone}
                                        isInvalid={!!errors.phone}
                                        isValid={touched.phone && !errors.phone}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    controlId="validationFormik103"
                                    className="position-relative"
                                >
                                    <Form.Label>Ваша электронная почта</Form.Label>
                                    <Form.Control
                                        label="Электронная почта"
                                        name="email"
                                        type="email"
                                        placeholder="Введите адрес электронной почты"
                                        value={values.email}
                                        isInvalid={!!errors.email}
                                        isValid={touched.email && !errors.email}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    controlId="validationFormik104"
                                    className="position-relative"
                                >
                                    <Form.Label >Здесь можно оставить коментарий</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        label="Комментарий"
                                        name="coment"
                                        type="text"
                                        placeholder="Здесь можно оставить коментарий"
                                        value={values.coment}
                                        isInvalid={!!errors.coment}
                                        isValid={touched.coment && !errors.coment}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.coment}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group
                                controlId="validationFormik106"
                                className="position-relative"
                            >
                                <Form.Check
                                    required
                                    name="acceptedTerms"
                                    label="Я подтверждаю разрешение на обработку персональных данных"
                                    onChange={handleChange}
                                    isInvalid={!!errors.acceptedTerms}
                                    feedback={errors.acceptedTerms}
                                    feedbackType="invalid"
                                    id="validationFormik106"
                                    feedbackTooltip
                                />
                            </Form.Group>
                            <hr />
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="button" type="submit">Отправить</button>
                                <button className="button button--black" type="button" onClick={onHide}>Закрыть</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}