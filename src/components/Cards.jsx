import Card from "./Card";
const Cards = ({content}) => {
    return ( 
        <div className="m-3">
            {content.map((c,i)=>
                <Card key={i} title={c.title} duration={c.duration} description={c.description}/>
            )}
        </div>
    );
}
 
export default Cards;