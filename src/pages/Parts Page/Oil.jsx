import React from 'react'
import TabOil from '../../Components/TabOil'

export default function Oil() {
    return (
        <div className='filter_page'>
            <div className="container__partspage">
                <h2 className="content__title">Масло</h2>
                <p className="text">
                    В отличие от обычных смазочных материалов, производимых производителями масел, оригинальные масла DEVELON
                    разрабатываются по-другому в ходе сертифицированных лабораторных, стендовых и полевых испытаний на
                    начальном этапе производства, чтобы обеспечить наилучший уровень производительности и соответствовать всем
                    требованиям DEVELON. оборудование.
                </p>
                <TabOil />
            </div>
        </div>
    )
}
