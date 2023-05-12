import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from '../Components/CardTK/Skeleton';
import { fetchTehCard, setCategoryId, setCategorySearch } from '../redux/slises/tehCardFilter';
import TehCard from '../Components/CardTK/CardTK';
import Categories from '../Components/Sort/Categories';

export default function TKatalog() {
    const dispatch = useDispatch();
    const { categoryId, categorySearch, items, status } = useSelector((state) => state.tehCardFilter);
    // категория техники
    const onChangeCategory = (id, categorySearch) => {
        dispatch(setCategoryId(id));
        dispatch(setCategorySearch(categorySearch));
    };
    // получение карточек моделей их фильтрация
    const getTehCard = async () => {
        /*const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
            const sortBy = sort.sortProperty.replace('-', '');
            const category = categoryId > 0 ? `category=${categoryId}` : '';
            const search = searchValue ? `&search=${searchValue}` : '';
    */
        const category = categoryId > 0 ? `category=${categorySearch}` : '';
        dispatch(
            fetchTehCard({
                category,
            }),
        );
        window.scrollTo(0, 0);
    };

    // Если был первый рендер то запрашиваем пиццы
    React.useEffect(() => {
        window.scrollTo(0, 0);
        getTehCard();
    }, [categorySearch]);

    return (
        <div className="container">
            <div className="main__teaser">
                <h1 className="teaser__title">Каталог техники</h1>
                <span className='accent-bar'></span>
            </div>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
            </div>
            {status === 'error' ? (
                <div className='content__error-info'>
                    <h2>Не удалось загрузить модели</h2>
                    <p>
                        Попробуйте повторить попытку позже.
                    </p>
                </div>
            ) : (
                <div className="content__tehcard">
                    {status === 'loading' ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : items.map((obj) => <TehCard key={obj.id} {...obj} />)}
                </div>
            )}
        </div>
    )
}
