import Array from "../assets/dc-comics-2/comics"
import style from "./Card.module.css"
export default function Card(props) {
    console.log(props);
    return (
        <>
            
            {Array.map(function (curElem, index) {


                return (

                    <div key={index} className={style.card}>
                        
                        <img src={curElem.thumb} alt="" />
                        <p>{curElem.title}</p>
                        
                    </div>

                )
            })}
        </>
    )
}