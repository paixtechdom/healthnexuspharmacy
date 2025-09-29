
import pharmacy from "../../../assets/images/pharmacy2.jpg"


export const Download = () => {
    return(
        <div className="w-11/12 lg:w-10/12 center flex-col lg:flex-row relative gap-[10vh] lg:gap-[25px] my-[10vh]">
        
        <div className="flex flex-col gap-5 text-primary w-full">
            <h2 className="text-4xl font-bold text-primary">Your health, Our Lifelong Commitment</h2>
            <p className="leading-relaxed">
                With intuitive search features and a curated selection of properties tailoerd to your proferences, finding your dream home has never been easier. Join thousends of satisfied users who have unlocked the key to their ideal living space with just a tap
            </p>
        </div>

        <div className="flex items-center justify-center lg:justify-between relative w-full">
            <div className="w-10/12 relative">
                <img src={pharmacy} className="w-fit" alt="Health Nexus Pharmacy" />
            </div>
        </div>


    </div>

    )
}
