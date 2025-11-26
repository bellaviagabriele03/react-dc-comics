import Logo from "./Logo"

export default function Header() {
    return (
        <header className="py-20">

            <nav className=" container align-items-center justify-content-between d-flex">
                <Logo />
                <ul className="d-flex gap-20">
                    <li><a href="">CHARACTERS</a></li>
                    <li><a href="">COMICS</a></li>
                    <li><a href="">MOVIES</a></li>
                    <li><a href="">TV</a></li>
                    <li><a href="">GAMES</a></li>
                    <li><a href="">COLLECTIBLES</a></li>
                    <li><a href="">VIDEOS</a></li>
                    <li><a href="">FANS</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">SHOP</a></li>
                </ul>
            </nav>

        </header>

    )
}