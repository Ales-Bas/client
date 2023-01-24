import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setSubTypePartId, setTypePartId } from '../redux/slises/modelSlice';
import styles from '../scss/components/_model-item.scss';


export default function ModelItem() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const subTypePart = useSelector((state) => state.models.subTypePart);
    const typePartId = useSelector((state) => state.models.typePartId);
    const partTypeList = useSelector((state) => state.models.partTypeList);
    const subTypePartId = useSelector((state) => state.models.subTypePartId);

    const [isSetSubTypePart, setIsSetSubTypePart] = React.useState(false);

    const onChangesubTypePart = (obj) => {
        dispatch(setSubTypePartId(obj));

        setIsSetSubTypePart(true);

    };

    const onChangeTypePart = (obj) => {
        dispatch(setTypePartId(obj));
        navigate(`/typepart/${obj.id}`);
        console.log(obj.id);
        setIsSetSubTypePart(false);

    };
    console.log(' а тут уже логирование работы выбора запчасти', typePartId);
    return (

        <div className='model-item'>
            {subTypePartId.id > 0 ? (

                partTypeList.map(({ id, name }) => (
                    <h4
                        key={id}
                        className="model-item__title"
                        onClick={() => onChangeTypePart({ id, name })}
                    >{name}</h4>
                ))

            )
                : (
                    subTypePart.map(({ name, id }) => (
                        <h4
                            key={id}
                            className="model-item__title"
                            onClick={() => onChangesubTypePart({ id, name })}
                        >{name}</h4>
                    ))
                )}

        </div>

    )
}