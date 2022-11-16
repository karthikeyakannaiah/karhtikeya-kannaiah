const Card = ({ title, duration, description }) => {
    return (
        <div className="text-bg-dark p-3 my-4 rounded">
            <div className="h3">{title}</div>
            {duration && <div className="mb-2 text-muted">{duration}</div>}
            <div className="mb-3 text-secondary">{description}</div>
        </div>
    );
}

export default Card;