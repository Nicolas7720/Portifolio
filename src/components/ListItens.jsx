export default function List ({ nome, href}) {
    return (
            <li className=" hover:scale-110 transition 2s font-Sora">
                <a href={href} className="text-cor-text font-Sora">{nome}</a>
            </li>
    )
}
