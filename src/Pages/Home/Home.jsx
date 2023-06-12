import ExtraSection from "../../Components/ExtraSection/ExtraSection"
import Carosel from "../../Components/Home/Carosel"
import PopularClasses from "../../Components/Home/PopularClasses"
import PopularInstructors from "../../Components/Home/PopularInstructors"




function Home() {
    return (
        <div>
            <Carosel></Carosel>
            <PopularClasses></PopularClasses>
            <ExtraSection></ExtraSection>
            <PopularInstructors></PopularInstructors>
        </div>
    )
}

export default Home



