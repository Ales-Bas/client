import React from 'react';
import { SearchPContext } from '../../App';
import closeicon from '../Search/close_icon.svg';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.scss'
import { fetchSearchParts, setSearchtext } from '../../redux/slises/partSearchSlice';
import { useDispatch } from 'react-redux';
import { SEARCHPAGE_ROUTE } from '../../utils/consts';
const SearchPkatalog = () => {
    const { searchPValue, setSearchPValue } = React.useContext(SearchPContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = React.useRef();

    const onClickClear = () => {
        setSearchPValue('');
        inputRef.current.focus();
    };
    const sendSearch = () => {
        dispatch(setSearchtext(searchPValue));
        getSearchParts();
        navigate(SEARCHPAGE_ROUTE);
        setSearchPValue('');
    };

    const getSearchParts = async () => {
        const partnumber = `partnumber=${searchPValue}`;
        dispatch(
            fetchSearchParts({
                partnumber,
            }),
        );
    };


    return (
        <div className={styles.root}>
            <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><title /><g
                    data-name="Layer 2"
                    id="Layer_2"><path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" /></g></svg>
            <input
                ref={inputRef}
                value={searchPValue}
                onChange={(event) => setSearchPValue(event.target.value.toUpperCase())}
                className={styles.input}
                placeholder='Поиск по номеру детали' />
            {searchPValue && (<img onClick={onClickClear} className={styles.clearIcon} src={closeicon} alt="Close logo" />)}
            <div className="button button--search" onClick={sendSearch}>Найти</div>
        </div>
    )
}

export default SearchPkatalog;
