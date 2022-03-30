import "./style.css";

interface Props{
    url: string
  title: string
  artist: string
}


const Card = ({ url, title, artist }: Props) => {
	return (
		<div className="card__wrapper">
			<div className="card__images">
				<img src={url} alt={title} className="card__image" />
			</div>
			<div className="card__info">
				<h5>{title}</h5>
				<p>{artist}</p>
			</div>
			<div className="button__wrapper">
				<button className="card__button">
					<a href="#">Select</a>
				</button>
			</div>
		</div>
	);
};

export default Card;
