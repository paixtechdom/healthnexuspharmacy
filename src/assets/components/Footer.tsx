import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneOutboundFill, } from "react-icons/bs"
import { ContactInfoInterface } from "../Interfaces"




export const ContactInfo = [
    {
        icon: <BsTelephoneOutboundFill />,
        contact: "+234 704 481 1643",
    },
    {
        icon: <BsEnvelopeFill />,
        contact: "healthnexuspharma@gmail.com",
    },
    {
        icon: <BsGeoAltFill />,
        contact: "55, Okeletu - Ijede Road, Elemu Bus Stop, Ikorodu, Lagos State.",
    }
]

const Footer = () => {
    return(
        <footer className="w-full center bg-primary pt-[10vh] pb-[5vh] lg:py-[15vh]">
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-6 text-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-9 md:gap-9">

                    <div className="w-full flex flex-col gap-4 col-span-4">
                        <div className="flex flex-col">
                            <h2 className="text-3xl text-gray-100 font-bold">HealthNexus</h2>
                            <p>Pharmacy and Stores Ltd</p>
                        </div>
                        <p className="text-sm">Licensed & Reliable Pharmacy</p>
                        <p className="text-[13px] text-blue-100">RC: 7236149</p>
                    </div>
                </div>


                 

                <div className="flex flex-col flex-wrap md:flex-row gap-3 lg:items-center my-3 lg:my-0">
                    {
                        ContactInfo.map((info: ContactInfoInterface, i) => (
                            <div key={i} className="flex items-center gap-2">
                                {info.icon}

                                <a href="">{info.contact}</a>
                            </div>
                        ))
                    }
                </div>

                <div className="justify-between items-center flex flex-col lg:flex-row gap-3">
                    <p className="w-full lg:w-fit text-center lg:text-left">Copyright © HealthNexus Pharmacy and Stores Ltd</p>

                    <p className="w-full lg:w-fit text-center lg:text-right">All Rights Reserved | <span className="underline">Terms and Conditions</span> | <span className="underline">Privacy Policy</span> </p>



                </div>
                {/* <p className="w-full text-center text-sm">Designed by <a href="tel:+2348112159799">Paix Techdom</a></p> */}
            </div>
        </footer>
    )
}

export default Footer