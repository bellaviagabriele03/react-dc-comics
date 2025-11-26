

import style from "./Footer.module.css"
const footerTop = `${style.footerTop}`
const col = `${style.col}`
export default function Footer() {
    return (
        <footer className={footerTop} >
            <div className="container d-flex align-items-center">
                <nav className="d-flex gap-20 py-40">

                    <div className={style.col}>
                        <h3 className={style.titleList}>DC COMICS</h3>
                        <ul className="mb-10">
                            <li><a href="">Characters</a></li>
                            <li><a href="">Comics</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">TV</a></li>
                            <li><a href="">Games</a></li>
                            <li><a href="">Videos</a></li>
                            <li><a href="">News</a></li>
                        </ul>
                        <h3 className={style.titleList}>SHOP</h3>
                        <ul className="">
                            <li><a href="">Shop DC</a></li>
                            <li><a href="">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                    <div className={style.col}>
                        <h3 className={style.titleList}>DC</h3>
                        <ul className="">
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
                    </div>

                    <div className={style.col}>
                        <h3 className={style.titleList}>DC</h3>
                        <ul className="">
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
                    </div>
                    <div className={style.col}>
                        <h3 className={style.titleList}>SITES</h3>
                        <ul className="">
                            <li> <a href="">DC</a></li>
                            <li> <a href="">MAD Magazine</a></li>
                            <li> <a href="">DC Kids</a></li>
                            <li> <a href="">DC Universe</a></li>
                            <li> <a href="">DC Power Visa</a></li>
                        </ul>
                    </div>











                </nav>




            </div>
        </footer >
    )
}
