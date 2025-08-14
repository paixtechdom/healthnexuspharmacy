import { Button } from "../../../assets/components/Button"
import { BsArrowRight } from "react-icons/bs"
import blur from "../../../assets/images/blur.png"
import { FaUserMd, FaHandshake, FaShieldAlt, FaSmile } from "react-icons/fa";


const values = [
    {
        icon: <FaUserMd />,
        title: "Professional Care",
        desc: "Our licensed pharmacists provide expert advice and reliable service every time."
    },
    {
        icon: <FaHandshake />,
        title: "Trust & Integrity",
        desc: "We build lasting relationships based on honesty, transparency, and respect."
    },
    {
        icon: <FaShieldAlt />,
        title: "Quality Assurance",
        desc: "Every product meets strict safety standards for your peace of mind."
    },
    {
        icon: <FaSmile />,
        title: "Customer Happiness",
        desc: "We strive to make every visit pleasant and every customer feel valued."
    }
]


export const AfterHero : React.FC =  () => {
    return(
        <>
            <section className="w-full center py-[5vh] overflow-hidden relative bg-gray-50">
                <img src={blur} alt="" className="absolute z-[-1] bottom-0 -right- 36 rotate-180 scale-110"/>


                <section className="w-11/12 lg:w-10/12 py-12 ">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        {/* Section Header */}
                        <p className="text-xl text-primary max-w-2xl mx-auto mb-10">
                        At HealthNexus Pharmacy and Stores Ltd, our values guide everything we do —
                        from serving customers to ensuring the highest quality of care.
                        </p>

                        {/* Values Grid */}
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                            {
                                values.map((v, i) =>(
                                <div key={i} className="p-3 py-8 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                                    <div className="text-green-600 text-4xl mb-4 mx-auto w-fit">
                                        {v.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-primary">{v.title}</h3>
                                    <p className="text-gray-600 text-sm">{v.desc}
                                    </p>
                                </div>
                                ))
                            }

                        </div>
                    </div>
                </section>



            </section>

            <section className="w-full center bg-primary py-[8vh]">
                <div className="w-11/12 lg:w-10/12 flex flex-col rounded-2xl p-6 lg:p-12 text-white gap-4">
                    <div className="flex flex-col gap-2">

                        <h2 className="font-bold text-2xl tracking-wide">HealthNexus simplifies your healthcare needs </h2>
                        <p className="">Get your prescriptions, track your orders, and receive expert advice — all in one place.</p>
                    </div>

                    <div className="flex lg:justify-end w-full lg:pr-8">

                    <Button 
                        className="text-primary bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                        text="Contact Us" 
                        icon={<BsArrowRight className="ml-3 "/>}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}