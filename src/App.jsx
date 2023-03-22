/** @format */

import "./App.css"

import Header from "./components/Header"
import Section from "./components/Section"
import ListItem from "./components/ListItem"
import Slider from "./components/Slider"

const gamesListData = [
	{
		url: "https://https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%20V.twitch.tv/alanzoka",
		imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg",
		alt: "imagem do jogo GTA5",
	},

	{
		url: "https://www.twitch.tv/directory/game/VALORANT",
		imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
		alt: "imagem do jogo VALORANT",
	},

	{
		url: "https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg",
		imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg",
		alt: "imagem do jogo Call'Duty Warzone",
	},

	{
		url: "https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive",
		imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg",
		alt: "imagem do jogo CSGO",
	},
]

const channelListData = [
	{
		url: "https://www.twitch.tv/alanzoka",
		imageUrl:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png",
		alt: "imagem Alanzoka",
	},

	{
		url: "https://www.twitch.tv/loud_coringa",
		imageUrl:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/c07acddc-1e1b-479f-97c4-09636f80e857-profile_image-150x150.png",
		alt: "Imagem loud_coringa",
	},

	{
		url: "https://www.twitch.tv/jonvlogs",
		imageUrl:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/00e7ebf9-89b9-41e1-b2bc-263b0ce805d0-profile_image-70x70.png",
		alt: "imagem jonVlogs",
	},

	{
		url: "https://www.twitch.tv/dabicarp",
		imageUrl:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/70b5c9b7-49df-42bf-af63-55d9295c4067-profile_image-70x70.jpeg",
		alt: "imagem dabicarp",
	},

	{
		url: "https://www.twitch.tv/jakeliny",
		imageUrl:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/caaa9067-d25b-4efb-b7c7-93badfd041a9-profile_image-70x70.png",
		alt: "imagem jakeliny",
	},
]

const socialListData = [
	{
		url: "https://github.com/luizgmachado",
		imageUrl: "./src/assets/github.svg",
		alt: "github",
	},
	{
		url: "https://instagram.com/luizgmachado",
		imageUrl: "./src/assets/instagram.svg",
		alt: "instagram",
	},
	{
		url: "https://www.linkedin.com/in/luiz-gustavo-machado-lopes/",
		imageUrl: "./src/assets/linkedin.svg",
		alt: "linkedin",
	},
	{
		url: "https://youtube.com/luizgmachado",
		imageUrl: "./src/assets/youtube.svg",
		alt: "youtube",
	},
	{
		url: "https://tiktok.com/luizgmachado",
		imageUrl: "./src/assets/tiktok.svg",
		alt: "tiktok",
	},
]

function App() {
	return (
		<div className="App">
			<Header />

			<main>
				<Section
					title="Meus Jogos"
					subtitle="Os games que eu mais curto jogar!"
					className="games-list">
					<Slider data={gamesListData} />
				</Section>

				<Section
					title="Canais e Stremers"
					subtitle="Lista de canais e trasmissões que não perco!"
					className="channel-list">
					{channelListData.map((item, index) => {
						return (
							<ListItem
								key={index}
								url={item.url}
								imageUrl={item.imageUrl}
								alt={item.alt}
							/>
						)
					})}
				</Section>

				<Section
					title="Minhas Redes"
					subtitle="Se conecte comigo agora mesmo"
					className="social-list">
					{socialListData.map((item, index) => {
						return (
							<ListItem
								key={index}
								url={item.url}
								imageUrl={item.imageUrl}
								alt={item.alt}
							/>
						)
					})}
				</Section>
			</main>
		</div>
	)
}

export default App
