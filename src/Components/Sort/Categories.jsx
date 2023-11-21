import React from 'react';

function Categories({ value, onChangeCategory }) {
    const categories = [{ categoryName: 'Вся техника' },
    {
        categoryName: 'Гусеничные экскаваторы',
        categorySearch: 'Гусеничный экскаватор',
    },
    {
        categoryName: 'Колесные экскаваторы',
        categorySearch: 'Колесный экскаватор',
    },
    {
        categoryName: 'Колесные погрузчики SD',
        categorySearch: 'Колесный погрузчик SD',
    },
    {
        categoryName: 'Колесные погрузчики DL',
        categorySearch: 'Колесный погрузчик DL'
    },
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map((obj, i) => (
                    <li
                        key={i}
                        onClick={() => onChangeCategory(i, obj.categorySearch)}
                        className={value === i ? 'active' : ''}
                    >
                        {obj.categoryName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;