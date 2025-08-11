import img from "../../../assets/images/pharmacy.jpg"
import blur from "../../../assets/images/blur.png"
import experience1 from "../../../assets/images/experience 2.jpg"
import experience2 from "../../../assets/images/experience 1.jpg"
import experience3 from "../../../assets/images/experience 3.jpg"


export const NotjustanApp:React.FC = () => {
    return(
        <>
            <section className="center w-full relative overflow-hidden">
                <>
                    <img src={blur} alt="" className="absolute z-[-1] top-0"/>
                    <img src={blur} alt="" className="absolute z-[-1] -botom-9 -right-36 rotate-180"/>
                </>

                <div className="w-11/12 lg:w-10/12 center flex-col lg:flex-row relative gap-[10vh] lg:gap-[25px] my-[10vh]">

                    <div className="flex items-center justify-center lg:justify-between relative w-full">
                        <div className="w-10/12 relative">
                            <img src={img} alt="Resida is not just an app" className="w-full"/>


                        </div>
                    </div>
                    

                    <div className="flex flex-col gap-5 text-primary w-full">
                        <h2 className="text-3xl font-bold">
                            HealthNexus is Not Just a Pharmacy
                        </h2>
                        <p className="text-primary text-xl">
                        We are a healthcare partner with you at the center.
                        </p>
                        <p className="text-black3 w-full leading-relaxed">
                        HealthNexus is committed to bridging the gap between quality medicines and the people who need them most. We’re not just a store; we’re a trusted solution for individuals and families seeking reliable healthcare, expert advice, and convenient access to essential products in their community.
                        </p>
                    </div>


                </div>
            </section>


            <section className="center w-full my-[10vh]">
              <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 gap-8 lg:gap-[25px]">
                <div className="flex flex-col lg:flex-row justify-between lg:justify-start lg:items-stretch gap-3 w-full lg:h-[18vh] relative">
                    <img src="" alt="" className="absolute"/>
                    <img src={experience1} alt="Eperience Image 1" className="h-full" />
                    <img src={experience2} alt="Eperience Image 2" className="h -full"/>
                    <img src={experience3} alt="Eperience Image 3" className="h -full" />
                </div>


                <h2 className="text-2xl font-bold lg:w-8/12 text-primary">
                    Our experience ensures trusted care, expert guidance, and exceptional service every time.
                </h2>
              </div>
            </section>
        </>
    )
}