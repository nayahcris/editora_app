import React from "react";
import { Carousel } from 'react-bootstrap'
import sensegarden1 from './sensegarden1.png'
import sensegarden2 from './sensegarden2.gif'
import sensegarden3 from './sensegarden3.gif'



const Home: React.FC = () => {
    return <div className="container">
                <h1 className="text-center">Sense Garden</h1>
                <Carousel className='center'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sensegarden1}
                        alt="capa_do_site"
                        />
                        <Carousel.Caption>
                             <h3>Sense Garden</h3>
                            <p>Traz a ideia de Jardins Sensoriais</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sensegarden2}
                        alt="imagem_demonstrando_a_editora"
                         />
                        <Carousel.Caption>
                            <h3>Com o uso da Tecnologia</h3>
                            <p>A Sense Garden busca trazer uma experiência única durante a leitura</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sensegarden3}
                        alt="com_o_uso_de_QRcode_e_RA"
                        />
                        <Carousel.Caption>
                            <h3>Uando QRCODES e Realidade Aumentada</h3>
                            <p>Podemos trazer os sentidos humanos durante a leitura.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        
</div>

}

export default Home
