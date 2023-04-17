import "keen-slider/keen-slider.min.css"

export default function ListItem(props) {
	return (
		<li className="keen-slider__slide">
			<a target="_blank" rel="noreferrer" href={props.url}>
				<img src={props.imageUrl} alt={props.alt} />
			</a>
		</li>
	)
}
