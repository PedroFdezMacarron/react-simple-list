import './Main.css';
import { useState } from "react";
// import Form from "../Form/Form";
import Gallery from "../Gallery/Gallery";

const initialValue = {
    title: "titulo",
    description: "descripcion",
    imgUrl: "url de la imagen",
  };

const iniLilst=[
    {title:"gatito 1" , description:"es el primer elemento",imgUrl:"https://ca-times.brightspotcdn.com/dims4/default/c3f4b96/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001"},
    {title:"gatito 2" , description:"es el segundo elemento",imgUrl:"https://cdn.onemars.net/sites/nutro_es_NkyIN_B9cV/image/20_1615982101979.jpeg"},
]
export default function Main(){
    const [data, setData] = useState(initialValue);
    const [cardList, setList] = useState(iniLilst);
    const submit = (e) => {
        e.preventDefault();
        console.log('añadir');
        setList([...cardList, data]);
      };
    const changeValue = (e) => {
        setData({...data, [e.target.name]: e.target.value});       
      };
    return(
        <div>        
            <h1>Galeria Cards 1.0</h1>
            <form className="form"  onSubmit={submit}>      
                <input type="text" placeholder={data.title} name="title" onChange={changeValue} />   
                <input type="text" name="description" placeholder={data.description} onChange={changeValue} />   
                <input type="text" name="imgUrl" placeholder={data.imgUrl} onChange={changeValue} />            
                <button>Añadir</button>
            </form>
            <Gallery cardList={cardList} ></Gallery>
        </div>
    )
};