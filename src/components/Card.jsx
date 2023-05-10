function Card({ card, onCardClick }) {

    const handleClick = () => {
        onCardClick(card);
    }

    return (
        <li className="card">
            <button className="card__trash" type="button"></button>
            <img src={card.link} alt={card.name} onClick={handleClick} className="card__image" />
            <div className="card__info">
                <h2 className="card__title">{card.name}</h2>

                <div className="card__like-container">
                    <button className="card__like" type="button"></button>
                    <p className="card__like-number">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export { Card };