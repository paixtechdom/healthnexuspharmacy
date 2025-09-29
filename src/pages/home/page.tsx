import { AfterHero } from "./sections/AfterHero"
import { Discover } from "./sections/Discover"
import { Download } from "./sections/Download"
import { Dream } from "./sections/Dream"
import { Hero } from "./sections/Hero"
import { NotjustanApp } from "./sections/NotjustanApp"


const HomePage: React.FC = () => {
    return(
        <main className="center flex-col">
            <Hero />
            <AfterHero />
            <Discover />
            <Dream />
            <NotjustanApp />
            <Download />
        </main>
    )
}


export default HomePage