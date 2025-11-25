import logoFooter from "./LogoBG"

import style from "./Footer.module.css"
import LogoBG from "./LogoBG"
const footerTop = `${style.footerTop}`
const col = `${style.col}`
export default function Footer() {
    return (
        <footer className={footerTop} >
            <div className="container d-flex align-items-center">
                <nav className="d-flex">
                    
                    <ul className="d-flex flex-column mx-20">
                        <li><h3 className={style.titleList}>DC COMICS</h3></li>
                        <li><a href="">Characters</a></li>
                        <li><a href="">Comics</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">TV</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">News</a></li>
                    </ul>

                    <ul className="d-flex flex-column mx-20">
                        <li><h3 className={style.titleList}>DC</h3></li>
                        <li><a href="">Terms Of Use</a></li>
                        <li><a href="">Privacy policy (New)</a></li>
                        <li><a href="">Ad Choices</a></li>
                        <li><a href="">Advertising</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Subscription</a>s</li>
                        <li><a href="">Talent workshops</a></li>
                        <li><a href="">CPSC Certificates</a></li>
                        <li><a href="">Ratings</a></li>
                        <li><a href="">Shop Help</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>

                    <ul className="d-flex flex-column mx-20">
                        <li><h3 className={style.titleList}>SITES</h3></li>
                        <li> <a href="">DC</a></li>
                        <li> <a href="">MAD Magazine</a></li>
                        <li> <a href="">DC Kids</a></li>
                        <li> <a href="">DC Universe</a></li>
                        <li> <a href="">DC Power Visa</a></li>
                    </ul>

                    <ul className="d-flex flex-column mx-20">
                        <li><h3 className={style.titleList}>SHOP</h3></li>
                        <li><a href="">Shop DC</a></li>
                        <li><a href="">Shop DC Collectibles</a></li>
                    </ul>

                </nav>

                <LogoBG />


            </div>
        </footer >
    )
}
