import Array from "../assets/dc-comics-2/comics"
import style from "./Card.module.css"


export default function Card(props) {

    const ArrayProp = [
        {

            title: props.title,
            text: props.text,

        },
        {

            title: props.title,
            text: props.text,

        },
        {

            title: props.title,
            text: props.text,

        },
        {

            title: props.title,
            text: props.text,

        },
        {

            title: props.title,
            text: props.text,

        },
        {

            title: props.title,
            text: props.text,

        },

    ];
    console.log(ArrayProp);




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

            {ArrayProp.map(function(curElem, index){
                return (
                    <div key={index} className={style.card}>
                        <h4 className={style.titleCardProp}>{curElem.title}</h4>
                        <p className={style.textCardProp}>{curElem.text}</p>
                    </div>
                )
            })}


        </>
    )
}