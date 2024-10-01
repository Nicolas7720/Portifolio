import computador from '../assets/img/computador.png';
// import SwiperComponent from './SwiperComponent';

export default function SectionSobreMim () {
    return (
        <>
            <section className="Eu">
                <div className="sobre-mim">
                    <h1>Nicolas <span>Antônio</span></h1>
                    <h3>Programador Front-End</h3>
                    <p>Sou um Programador Front-End, tenho experiência criando aplicações com HTML, CSS e JavaScript</p>
                </div>
                <div className="img">
                    <img src={computador} alt="Computador"/>
                </div>
            </section>
            {/* <SwiperComponent/> */}
        </>
    )
}
