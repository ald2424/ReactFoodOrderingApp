import logoImg from '../assets/logo.jpg'

export default function Header() {
    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="food" />
                <h1>Food Ordering</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}