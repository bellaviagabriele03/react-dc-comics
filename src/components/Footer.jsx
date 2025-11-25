import style from "./Footer.module.css"
const footerTop = `${style.footerTop} d-flex justify-content-around align-items-center`
const col = `${style.col}`
export default function Footer() {
    return (
        <footer className="container" >
            <section className={footerTop}>
                <nav className="d-flex">
                   <ul>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                   </ul>
                </nav>
                logo
            </section>
            <section>
                questo è footer bottom
            </section>
        </footer >
    )
}
