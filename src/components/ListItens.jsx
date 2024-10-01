export default function List ({ nome, href}) {
    return (
            <li>
                <a href={href}>{nome}</a>
            </li>
    )
}
