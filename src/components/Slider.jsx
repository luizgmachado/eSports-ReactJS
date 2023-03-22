/** @format */

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import ListItem from "./ListItem"

export default function Slider(data) {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 0,
		},
	})

	return (
		<ul ref={sliderRef} className="keen-slider">
			{data.data.map((item, index) => {
				return (
					<ListItem
						key={index}
						url={item.url}
						imageUrl={item.imageUrl}
						alt={item.alt}
					/>
				)
			})}
		</ul>
	)
}
