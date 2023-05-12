import Carousel from 'react-bootstrap/Carousel';

function CaruselTK({ urlimg, urlimgone, urlimgtwo, urlimgethree }) {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`https://web-prod.online/${urlimg}`}
                    alt="pic slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`https://web-prod.online/${urlimgone}`}
                    alt="pic slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`https://web-prod.online/${urlimgtwo}`}
                    alt="pic slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`https://web-prod.online/${urlimgethree}`}
                    alt="pic slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CaruselTK;