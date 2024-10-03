import computador from '../assets/img/computador.png';

export default function SectionSobreMim () {
    return (
        <main className='w-full h-full bg-intercalar3'>
            <section className="w-full h-screen flex items-center justify-around py-5 px-20 flex-row gap-4">
                <div className="w-80">
                    <h1 className='text-cor-text text-6xl font-Poppins'>Nicolas <span className='text-portifolio w-auto font-Poppins'>Antônio</span></h1>
                    <h3 className='text-cor-text font-Poppins'>Programador Front-End</h3>
                    <p className='text-cor-text text-base'>Sou um Programador Front-End, tenho experiência criando aplicações com HTML, CSS, JavaScript e React</p>
                </div>
                <div className="w-auto h-1/5 sm rounded-3xl">
                    <img src={computador} alt="Computador" className='w-full h-full rounded-3xl max-w-60'/>
                </div>
            </section>
        </main>
    )
}
