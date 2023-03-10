import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { clearPartItems } from '../../redux/slises/cartSlice';
import { useDispatch } from 'react-redux';

import styles from './SendCart.module.scss';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};


{/*const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/*/ }

export default function SendCart({ show, onHide, partItems }) {
    const dispatch = useDispatch();
    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Мы проверим наличие и цену вашего заказа и свяжемся с вами
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        email: '',
                        parts: partItems,
                        coment: '',
                        acceptedTerms: false, // added for our checkbox
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(20, 'Must be 15 characters or less')
                            .required('Required'),
                        phone: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Некорректно введен адрес')
                            .required('Required'),
                        acceptedTerms: Yup.boolean()
                            .required('Required')
                            .oneOf([true], 'You must accept the terms and conditions.'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            axios.post(`http://localhost:5000/api/cartsend`, values)
                                .then((res) => {
                                    alert('Ваш заказ успешно добавлен.');
                                });

                            setSubmitting(false);
                            dispatch(clearPartItems());
                        }, 400);
                    }}
                >
                    <Form className={styles.modalStyle}>
                        <MyTextInput
                            label="Имя"
                            name="name"
                            type="text"
                            placeholder="Введите Имя"
                        />

                        <MyTextInput
                            label="Телефон"
                            name="phone"
                            type="text"
                            placeholder="+7"
                        />

                        <MyTextInput
                            label="Электронная почта"
                            name="email"
                            type="email"
                            placeholder="Введите адрес электронной почты"
                        />
                        <MyTextInput
                            label="Комментарий"
                            name="coment"
                            type="text"
                            placeholder="Здесь можно оставить коментарий"
                        />
                        <MyCheckbox name="acceptedTerms">
                            Я не робот
                        </MyCheckbox>

                        <button type="submit" onClick={onHide}>Отправить</button>
                    </Form>
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}
