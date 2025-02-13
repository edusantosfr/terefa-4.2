import { Link } from 'react-router-dom'

export function Home () {
    return (
        <main>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to='/sobre'>Sobre</Link>
                </li>
                <li>
                    <Link to='/usuario'>Usuário</Link>
                </li>
                <li>
                    <Link to='/categorias'>Categorias</Link>
                </li>
            </ul>
        </main>
    )
}