import Logo from "./Logo"

const headerLinks = [
    {
        title: "CHARACTERS",
        path: "/characters",
        active: false,
    },
    {
        title: "COMICS",
        path: "/comics",
        active: false,
    },
    {
        title: "MOVIES",
        path: "/movies",
        active: false,
    },
    {
        title: "TV",
        path: "/tv",
        active: false,
    },
    {
        title: "GAMES",
        path: "/games",
        active: true,
    },
    {
        title: "COLLECTIBLES",
        path: "/collectibles",
        active: false,
    },
    {
        title: "VIDEOS",
        path: "/videos",
        active: false,
    },
    {
        title: "FANS",
        path: "/fans",
        active: false,
    },
    {
        title: "NEWS",
        path: "/news",
        active: false,
    },
    {
        title: "SHOP",
        path: "/shop",
        active: false,
    },
]

export default function Header() {
    return (
        <header className="py-20">

            <nav className=" container align-items-center justify-content-between d-flex">
                <Logo />
                <ul className="d-flex gap-20">
                    {headerLinks.map(function (curLink) {
                        return (
                            <li className={curLink.active ? "active" : ""}><a href="">{curLink.title}</a></li>
                        )
                    })}
                </ul>
            </nav>

        </header>

    )
}