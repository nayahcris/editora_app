import React from "react";
import { Carousel } from 'react-bootstrap'



const Home: React.FC = () => {
    return <div className="container">
                <h1 className="text-center">Sense Garden</h1>
                <Carousel className='center'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/wp/wp1871998.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Patinação Artística é um esporte</h3>
                    <p>Um esporte que apesar de bonito é perigoso</p>
                    </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://nefariousreviews.files.wordpress.com/2021/04/yuri-on-ice-eros.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Os patinadores</h3>
                            <p>Os patinadores precisam dançam em cima de um patins com uma lâmina metálica</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://ovicio.com.br/wp-content/uploads/2020/11/20201127-yuri-on-ice-1246663-1280x0-1-1200x675.jpeg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>A beleza e a leveza</h3>
                            <p>Enquanto dançam e se apresentam passam por temperaturas baixas.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
        
</div>

}

export default Home
