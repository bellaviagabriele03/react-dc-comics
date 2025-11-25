import style from "./Main.module.css"

const string = "--> Content Goes Here <--"
const className = `container py-40 ${style.background} ${style.text}`

export default function Main() {
    return (
        <main className={className}>
           {string}
        </main>
    )
}