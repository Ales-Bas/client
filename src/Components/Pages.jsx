import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from "react-bootstrap";
import { setCurrentPage } from '../redux/slises/tehCardFilter';


export default function Pages() {
    const dispatch = useDispatch();
    const { items, limit, currentPage } = useSelector((state) => state.tehCardFilter);
    const pageCount = Math.ceil(items.count / limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3 justify-content-center">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={currentPage === page}
                    onClick={() => dispatch(setCurrentPage(page))}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
}
