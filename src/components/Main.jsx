import style from "./Main.module.css"
import Array from "../assets/dc-comics-2/comics"

const string = "--> Content Goes Here <--"
const className = `py-40 ${style.background} ${style.text}`

export default function Main() {

    return (
        <main className={className}>
            <div className="container">
                <div className="d-flex flex-wrap">
                    {Array.map(function(curElem, index){
                        return (
                            <div key={index} className={style.col}>
                                <img src={curElem.thumb} alt="" />
                                <p>{curElem.series}</p>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </main>
    )
}