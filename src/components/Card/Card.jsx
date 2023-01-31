export default function Card({card}){


    return(        
        <div className="Card" >       
            <div>
                {card.item.title}   
            </div>

            <img className="img-card" src={card.item.imgUrl} alt=  {card.item.title}></img>                        

            <div>
                {card.item.description}
            </div>
        </div>
    )
};