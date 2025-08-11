import { Button } from "../../../assets/components/Button"

export const Hero = () => {
    return(
        <section className="min-h-screen bg-hero bg-center bg-cover w-full center bg-fixed"> 
            <div className="w-11/12 lg:w-10/12 flex flex-col justify-center items-start">
                <div className="w-full flex flex-col justify-center items-center gap-6 lg:gap-8 text-center">
                
                    <h1 className="font-bold text-4xl lg:text-5xl md:w-11/12 lg:w-8/12 hero-text text-primary">
                        Your Health, Our Priority
                    </h1> 
                    <p className="md:w-11/12 lg:w-8/12 text-">
                    Providing trusted medicines, professional advice, and friendly service—because your well-being matters every day.
                    </p>
                    <p className="text-[12px] mt-[-12px]">Licensed & Reliable Pharmacy | Open 7 Days a Week</p>
                    <div className="flex items-center gap-5 md:gap-9 w-11/12 lg:w-6/12">

                    <div className="w-full flex justify-center">
                        <Button text="Contact Us" 
                        navigateTo="contact"
                        className="bg-primary text-white font-bold py-3 px-8"/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}