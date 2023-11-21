import Carousel from 'react-bootstrap/Carousel';

function CaruselTK({ urlimgone, urlimgtwo, urlimgethree }) {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className='d-block'
                    src={process.env.REACT_APP_API_URL + "/" + `${urlimgone}`}
                    alt="pic slide_one"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block'
                    src={process.env.REACT_APP_API_URL + "/" + `${urlimgtwo}`}
                    alt="pic slide_two"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block'
                    src={process.env.REACT_APP_API_URL + "/" + `${urlimgethree}`}
                    alt="pic slide_three"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CaruselTK;