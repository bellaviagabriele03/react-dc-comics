import style from "./Main.module.css"
import Card from "./Card"



export default function Main() {
    const string = "--> Content Goes Here <--"
    const className = `py-40 ${style.background} ${style.text}`
    return (
        <main className={className}>
            <div className="container">

                <div className="d-flex flex-wrap gap-10 justify-content-center">
                    <Card title="Questa è una card creata tramite PROPS !!!" text="Spero che Loris sia fiero ;)" />
                    <a className={style.btnMain} href="">LOAD MORE</a>
                </div>
            </div>
        </main>
    )
}