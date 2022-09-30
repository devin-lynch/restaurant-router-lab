import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <Link to='/'>Home</Link>{' | '}
            <Link to='/menu'>Menu</Link>{' | '}
            <Link to='/about'>About</Link>{' | '}
            <Link to='/contact'>Contact Us!</Link>
        </nav>
    )
}