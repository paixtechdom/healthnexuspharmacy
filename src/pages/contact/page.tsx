import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneOutboundFill } from "react-icons/bs"
import { ContactInfoInterface, } from "../../assets/Interfaces"

const contactInfo = [
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


const ContactPage = () => {



    return(
        <main className="center flex-col w-full pt-[20vh] pb-[10vh] bg-white">
            <div className="w-11/12 lg:w-10/12 cen ter flex-col gap-9 text-primary">
                <div className="flex flex-col gap-3 text-cen ter">
                    <h1 className="font-bold text-4xl">
                        Contact Us
                    </h1>
                    <p className="text-gray-700">
                        
                    </p>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-[25px] xl:gap-[50px] p-2 rounded-xl bg-white shadow-2xl">
                    <div className="bg-primary flex flex-col justify-between text-gray-300 p-9 rounded-t-xl lg:rounded-r-none lg:rounded-l-xl relative overflow-hidden w-full lg:gap-9">

                        <div className="flex flex-col gap-5 h-[65%]">
                            {
                                contactInfo.map((contact : ContactInfoInterface, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <div className="text-xl text-white">
                                            {contact.icon}
                                        </div>

                                        <p>{contact.contact}</p>
                                    </div>
                                ))
                            }
                        </div>


                        <div className="absolute w-[150px] h-[150px] bg-white bg-opacity-20 rounded-full -right-[70px] -bottom-[35px]"></div>

                    </div>


    
                    
                </div>
            </div>
        </main>
    )
}


export default ContactPage
