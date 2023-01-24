const Card = ({ title, duration, description }) => {
    return (
        <div className="bg-black m-2 p-2 rounded-lg">
            {duration && <div className="text-slate-400 text-sm">{duration}</div>}
            <div className="text-yellow-400">{description}</div>
            <div className="text-xl">{title}</div>
        </div>
    );
}

export default Card;