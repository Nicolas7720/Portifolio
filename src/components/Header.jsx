import List from "./ListItens";

const itensNav = [
    { nomeLink: 'Inicio', href: '#' },
    { nomeLink: 'Especialidades', href: '#' },
    { nomeLink: 'Sobre', href: '#' },
    { nomeLink: 'Projetos', href: '#' },
    { nomeLink: 'Contato', href: '#' },

]

export default function Header() {
    return (
        <header className="flex items-center justify-between z-10 top-0 w-full h-1/6 bg-intercalar1">
            <nav className="flex justify-around flex-wrap w-full items-center h-1/6">
                <h2 className="text-portifolio">Portfólio</h2>
                <ul>
                    {
                        itensNav.map((itemNav, index) => {
                            return (
                                <List
                                    key={index}   nome={itemNav.nomeLink}
                                    href={itemNav.href}
                                />
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}