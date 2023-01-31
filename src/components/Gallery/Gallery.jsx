import './Gallery.css';
import Card from '../Card/Card';

export default function Gallery({cardList}){
    return(
        <div>
            <h2>Lista de Cards</h2>
            <div className="gallery">                
                {cardList.map((item, index) => <div key={index}>
                    
                    <Card  card={{item}} > </Card>

                </div>)} 
            </div>
        </div>       
    )
};