import prescriptions from "../../../assets/images/prescriptions.jpg"
import over from "../../../assets/images/over.jpg"
import Vitamins from "../../../assets/images/Vitamins.jpg"
import Health from "../../../assets/images/Health.webp"
import Medication from "../../../assets/images/Medication.jpg"
import { Button } from "../../../assets/components/Button"
import { BsArrowRight } from "react-icons/bs"


const locationsList = [
    {
        img: prescriptions,
        location: 'Prescription Refills',
    },
    {
        img: Health,
        location: 'Medicines',
    },
    {
        img: Vitamins,
        location: 'Vitamins & Supplements',
    },
    {
        img: over,
        location: 'Health & Wellness Advice',
    },
    {
        img: Medication,
        location: 'Medication Therapy Management',
    },
]
export const Discover = () => {
    return(
        <>
            <section className="w-full center flex-col bg-trusted bg-center min-h-[50vh] bg-cover text-center gap-4 bg-fixed relative">
                <div className="absolute z-[1] bg-black w-full h-full bg-opacity-[0.7]">

                </div>
                <h2 className="z-[11] text-4xl md:text-5xl font-bold text-white leading-relaxed w-11/12 md:w-9/12 lg:w-7/12">
                    Your trusted pharmacy, anytime, anywhere
                </h2>
                <Button className="z-[11] rounded-bl-xl bg-secondary w-fit flex items-center py-3 text-primary font-bold"
                    text="Contact Us"
                    icon={<BsArrowRight className="ml-3 "/>}
                />
            </section>

            <section className="center w-full text-primary py-[10vh]">
                <div className="w-11/12 lg:w-10/12 flex-col flex gap-5 text-center">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
                        {
                            locationsList.map((location, i) =>(
                                <div key={i} className={`center rounded-2xl overflow-hidden relative ${i == 0 ? " md:row-span-2" : ""}`}>

                                <img src={location.img} alt={location.location} className={`w-full h-full object-cover` }/>

                                <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-end pb-6 cursor-pointer">

                                    <div className="w-9/12 rounded-xl flex flex-col text-left bg-zinc-600 backdrop-blur-lg bg-opacity-45 p-2 px-6">
                                        <p className="font-semibold text-white tracking-wide">{location.location}</p>
                                    </div>

                                </div>
                                
                            </div>
                             
                            ))  
                        }
                    </div>
                </div>
            </section>


        </>
    )
}
