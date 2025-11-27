import style from "./Main.module.css"
import Card from "./Card"



export default function Main() {
    const string = "--> Content Goes Here <--"
    const className = `py-40 ${style.background} ${style.text}`
    return (
        <main className={className}>
            <div className="container">
                <div className="d-flex flex-wrap">
                    <Card text="Ciao sono un testo" />
                </div>
            </div>
        </main>
    )
}