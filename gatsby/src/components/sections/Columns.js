import React, {useState} from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"

const Columns = () => {

    const [menu, setMenu] = useState(false);
    const [menuEn, setMenuEn] = useState(false);

    const [mapa, setMapa] = useState(false);

    const map = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0522948942516!2d-99.17579937109213!3d19.410146344987346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fff467584079%3A0x5f5782a1e1db88a1!2sMendl%20Delicatessen!5e0!3m2!1ses!2smx!4v1678472715378!5m2!1ses!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    const settingsArriba = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0,
        speed: 12000,
        pauseOnHover: false,
        cssEase: 'linear',
        vertical: true,
        draggable: true
      };

    const settingsAbajo = {
        slidesToShow: 1,
        slidesToScroll: -1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0,
        speed: 10000,
        pauseOnHover: false,
        cssEase: 'linear',
        vertical: true,
        draggable: true
      };


    return(
        <>
            <Sections>
                {menu ? 
                <div className='menu'>
                    <div className='container'>
                        <div className='image'>
                            <StaticImage
                                src="../../assets/images/menuEs.png"
                                alt="Menu Mendl"
                                layout="fullWidth"
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                        <button onClick={() => setMenu(!menu)}>CERRAR</button>
                    </div>
                    
                </div>
                :
                ''
            }
                {menuEn ? 
                <div className='menu'>
                    <div className='container'>
                        <div className='image'>
                            <StaticImage
                                src="../../assets/images/menuEn.png"
                                alt="Menu Mendl"
                                layout="fullWidth"
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                        <button onClick={() => setMenuEn(!menuEn)}>CERRAR</button>
                    </div>
                    
                </div>
                :
                ''
            }
                {mapa ? 
                <div className='mapa'>
                    <div className='container'>
                        <div className='map' dangerouslySetInnerHTML={{__html: map}} />
                        <a target='_blank' rel="noreferrer" className='direccion' href='https://goo.gl/maps/dGRaPQc787Zo4JJG6'>
                            <img src='./direccion.svg' alt='Dirección' />
                            <img className='btn' src='/b.svg' alt='cómo llegar' />
                        </a>
                        <button onClick={() => setMapa(!mapa)}>CERRAR</button>
                    </div>
                    
                </div>
                :
                ''
            }
                
            </Sections>
            <ColumnsContainer>
                <div className='desktop'>
                    <Slider className='column uno' {...settingsAbajo}>
                        <div className='item first img min-mid'>
                            <img src='./images/000.jpeg' alt='Mendl' />
                        </div>
                        <div className='item first poster'>
                            <img src='./images/001.png' alt='Mendl' />
                        </div>
                        <div className='item first min'>
                            <img src='./images/a.jpeg' alt='Mendl' />
                        </div>
                        <div className='item second poster'>
                            <img src='./images/002.png' alt='Mendl' />
                        </div>
                        <div className='item second '>
                            <img src='./images/b.jpeg' alt='Mendl' />
                        </div>
                        <button className='item third poster' onClick={() => setMenu(!menu)}>
                            <img src='./images/003.png' alt='Mendl' />
                        </button>
                        <div className='item fourth img min'>
                            <img src='./images/004.jpeg' alt='Mendl' />
                        </div>

                    </Slider>
                    <Slider className='column ' {...settingsArriba}>
                        <div className='item first poster'>
                            <img src='./images/005.png' alt='Mendl' />
                        </div>
                        <div className='item first min-mid'>
                            <img src='./images/c.jpeg' alt='Mendl' />
                        </div>
                        <div className='item poster min'>
                            <img src='./images/006.png' alt='Mendl' />
                        </div>
                        <button className='item third poster' onClick={() => setMenuEn(!menuEn)}>
                            <img src='./images/007.png' alt='Mendl' />
                        </button>
                        
                        <div className='item poster min-mid'>
                            <img src='./images/008.png' alt='Mendl' />
                        </div>
                        <div className='item min-mid'>
                            <img src='./images/d.jpeg' alt='Mendl' />
                        </div>
                        <div className='item img poster'>
                            <img src='./images/009.png' alt='Mendl' />
                        </div>
                    </Slider>
                    <Slider className='column tres' {...settingsAbajo}>
                        <div className='item first min-mid'>
                            <img src='./images/010.jpeg' alt='Mendl' />
                        </div>
                        {/* <div className='item second poster'>
                            <img src='./images/011.png' alt='Mendl' />
                        </div> */}
                        <div className='item fourth poster min-mid'>
                            <img src='./images/012.png' alt='Mendl' />
                        </div>

                        <button className='item third poster' onClick={() => setMapa(!mapa)}>
                            <img src='./images/013.png' alt='Mendl' />
                        </button>

                        
                        <div className='item fifth min-mid'>
                            <img src='./images/e.jpeg' alt='Mendl' />
                        </div>
                        <div className='item fifth poster'>
                            <img src='./images/014.png' alt='Mendl' />
                        </div>
                        <div className='item fifth img min'>
                            <img src='./images/015.jpeg' alt='Mendl' />
                        </div>
                    </Slider>
                </div>
                
                <div className='movil'>
                    <Slider className='column uno' {...settingsAbajo}>
                    <div className='item first img min'>
                            <img src='./images/000.jpeg' alt='Mendl' />
                        </div>
                        <div className='item first'>
                            <img src='./images/001.png' alt='Mendl' />
                        </div>
                        <div className='item first min-mid'>
                            <img src='./images/a.jpeg' alt='Mendl' />
                        </div>
                        <div className='item second min'>
                            <img src='./images/002.png' alt='Mendl' />
                        </div>
                        <div className='item second min'>
                            <img src='./images/b.jpeg' alt='Mendl' />
                        </div>
                        <button className='item third' onClick={() => setMenu(!menu)}>
                            <img src='./images/003.png' alt='Mendl' />
                        </button>
                        <div className='item fourth img min-mid'>
                            <img src='./images/004.jpeg' alt='Mendl' />
                        </div>
                        <div className='item first min'>
                            <img src='./images/005.png' alt='Mendl' />
                        </div>
                        <div className='item first'>
                            <img src='./images/c.jpeg' alt='Mendl' />
                        </div>
                        <div className='item min-mid'>
                            <img src='./images/006.png' alt='Mendl' />
                        </div>
                        <button className='item third poster' onClick={() => setMenuEn(!menuEn)}>
                            <img src='./images/007.png' alt='Mendl' />
                        </button>
                    </Slider>
                    <Slider className='column ' {...settingsArriba}>
                    <div className='item min'>
                            <img src='./images/008.png' alt='Mendl' />
                        </div>
                        <div className='item min-mid'>
                            <img src='./images/d.jpeg' alt='Mendl' />
                        </div>
                        <div className='item img '>
                            <img src='./images/009.png' alt='Mendl' />
                        </div>
                        <div className='item first'>
                            <img src='./images/010.jpeg' alt='Mendl' />
                        </div>
                        {/* <div className='item second'>
                            <img src='./images/011.png' alt='Mendl' />
                        </div> */}
                        <div className='item fourth poster'>
                            <img src='./images/012.png' alt='Mendl' />
                        </div>
                        <button className='item third poster' onClick={() => setMapa(!mapa)}>
                            <img src='./images/013.png' alt='Mendl' />
                        </button>
                        <div className='item fifth min'>
                            <img src='./images/e.jpeg' alt='Mendl' />
                        </div>
                        <div className='item fifth img min-mid'>
                            <img src='./images/014.jpeg' alt='Mendl' />
                        </div>
                        <div className='item fifth img'>
                            <img src='./images/015.jpeg' alt='Mendl' />
                        </div>
                    </Slider>
                </div>
            </ColumnsContainer>
        </>
        
    )
}

const Sections = styled.div`
position: relative;
z-index: 20;
.mapa {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(227, 36, 45, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .container {
            background-color: rgba(240, 201, 186, 1);
            padding: 20px;
            max-width: 450px;
            height: 550px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .direccion {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding: 0 50px;
                .btn {
                    width: 150px;
                    margin: 20px auto;
                }
            }
            .map {
                width: 100%;
                height: 100%;
                iframe {
                    filter: grayscale(1);
                    width: 100% !important;
                    height: 100% !important;
                }
            }
            
            button {
                margin-top: 0px;
                margin-bottom: 20px;
                text-align: center;
                color: var(--red);
                margin-left: auto;
                margin-right: auto;
                display: block;
                font-weight: bold;
                letter-spacing: 2px;
            }
        }
}
.menu {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(48, 83, 144, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .container {
            background-color: rgba(48, 83, 144, 1);
            padding: 20px;
            max-width: 1050px;
            width: 95%;
            button {
                margin-top: 40px;
                margin-bottom: 20px;
                text-align: center;
                color: var(--white);
                margin-left: auto;
                margin-right: auto;
                display: block;
                font-weight: bold;
                letter-spacing: 2px;
            }
        }
        
    }
`

const ColumnsContainer = styled.div`
    
    .desktop {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        padding-left: 50px;
        padding-right: 50px;
        box-sizing: content-box;
        max-width: 1200px;
        grid-gap: 100px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        z-index: 5;
        margin: 0 auto;
        height: 100vh;
        @media (max-width: 850px) {
            display: none;
        }
        .column {
            width: 100%;
            height: 100%;
            .img {
                img {
                }
            }
            .poster {
                    img {
                        max-width: 240px;
                    }
                }
            .item {
                margin-bottom: 300px;
            }
            .min {
                img {
                    width: 60%;
                }
            }
            .min-mid {
                img {
                    width: 80%;
                }
            }
            .item.first, .item.second {
                display: flex !important;
                justify-content: flex-end;
                img {

                }
            }
            .item.third {
                display: flex !important;
                justify-content: flex-start;
                img {

                }
            }
            .slick-list {
                height: 100vh !important;
            }
        }
        .dos {
            .item {
                &:first-child {
                    margin-top: 100px !important;
                }
            }
        }
    }
    .movil {
        display: none;
        @media (max-width: 850px) {
            display: grid !important;
            grid-gap: 20px;
            box-sizing: border-box !important;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            padding-left: 50px;
            padding-right: 50px;
            box-sizing: content-box;
            max-width: 1200px;
            grid-gap: 100px;
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            z-index: 5;
            margin: 0 auto;
            height: 100vh;
            .column {
                .item {
                    margin-bottom: 150px;
                    img {
                    }
                }
                .item.first, .item.second {
                    display: flex !important;
                    justify-content: flex-end;
                    img {
                        width: 80%;

                    }
                }
                .item.third {
                    display: flex !important;
                    justify-content: flex-start;
                    img {
                        width: 80%;

                    }
                }
                .slick-list {
                    height: 100vh !important;
                }
            }
        }
    }
`

export default Columns