import style from "./Main.module.css"

const string = "--> Content Goes Here <--"
const className = `py-40 ${style.background} ${style.text}`

export default function Main() {
    return (
        <main className={className}>
            <div className="container">
                <h1>{string}</h1>
            </div>
        </main>
    )
}