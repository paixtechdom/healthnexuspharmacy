import { Link } from "react-router-dom"
import { Button } from "./Button"




const Navbar = () => {

    return(
        <>
           <>
        <header className={`fixed center w-full left-0 top-0 h-[10vh] md:h-[12vh] z-50 transition-all duration-1000 bg-white border-b border-gray-100`}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12">

                <Link to={'/'} className='w-4/12 flex flex-col items-start text-primary scale-[0.8]'>
                    <h3 className="text-3xl font-bold">
                        HealthNexus
                    </h3>
                <p className="text-sm">Pharmacy & Stores Ltd</p>
                </Link>


                <nav className="flex items-center text-primary gap-4 w-9/12 justify-end">
                    <Link to="/Contact" className="">
                        <Button text="Contact Us" className="w-fit border bg-secondary text-primary"/>
                    </Link>
                </nav>
       
            </div>

            
        </header>
        </>
        </>
    )
}


export default Navbar
