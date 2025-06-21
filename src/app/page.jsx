import Estadisticas from "@/components/Estadisticas"
import HeroHome from "@/components/HeroHome"
import Testimonios from "@/components/Testimonios"
import WhatWeDo from "@/components/WhatWeDo"

export default function Home() {
	return(
		<main>
			<HeroHome />
			<WhatWeDo />
			<Estadisticas />
			<Testimonios />
		</main>
	)
}