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
        <header className="flex items-center justify-between z-10 w-full h-1/3 bg-intercalar1 p-8">
            <nav className="flex justify-around flex-wrap w-full items-center h-1/6 ">
                <h2 className="text-portifolio scale-125 pb-2">Portfólio</h2>
                <ul className="flex flex-row gap-5 list-none">
                    {
                        itensNav.map((itemNav, index) => {
                            return (
                                <List
                                    key={index}   nome={itemNav.nomeLink}
                                    href={itemNav.href}
                                >
                                </List>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}