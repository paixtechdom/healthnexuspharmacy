import {
    FaHeartbeat,
    FaUserCheck,
    FaUserMd,
    FaShieldAlt,
    FaChartLine,
    FaHandsHelping
  } from "react-icons/fa";


export const Dream = () => {
    const values = [
        {
          icon: <FaHeartbeat className="text-green-600 text-4xl" />,
          title: "Holistic Health Approach",
          desc: "We believe in treating the whole person, not just the symptoms. Our services go beyond prescriptions, focusing on your overall health and well-being."
        },
        {
          icon: <FaUserCheck className="text-green-600 text-4xl" />,
          title: "Personalized Care",
          desc: "Every individual is unique, and so are their health needs. We provide personalized solutions tailored to your specific health and beauty goals."
        },
        {
          icon: <FaUserMd className="text-green-600 text-4xl" />,
          title: "Experienced and Caring Team",
          desc: "Our team of qualified professionals is dedicated to providing expert guidance, ensuring you receive the best care and advice."
        },
        {
          icon: <FaShieldAlt className="text-green-600 text-4xl" />,
          title: "Quality Products You Can Trust",
          desc: "We offer a carefully selected range of health and beauty products, ensuring you have access to only the highest-quality solutions for your well-being."
        },
        {
          icon: <FaChartLine className="text-green-600 text-4xl" />,
          title: "Proactive Health Management",
          desc: "We don’t just react to health issues; we take a proactive approach by regularly reviewing your needs and identifying opportunities to enhance your health outcomes."
        },
        {
          icon: <FaHandsHelping className="text-green-600 text-4xl" />,
          title: "Customer-Centered Support",
          desc: "Your health journey is important to us, and we’re here to support you every step of the way with personalized care, expert recommendations, and continuous follow-up."
        }
      ];

    return(
        <section className="w-full py-12 bg-gray-50">
            <div className="mx-auto w-11/12 lg:w-10/12">
            {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary">Why Choose Us</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Discover the values that make HealthNexus Pharmacy and Stores Ltd your trusted partner in health and wellness.
                    </p>
                </div>
        
                {/* Values Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {values.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <div className="flex justify-center mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-center text-primary">
                        {item.title}
                        </h3>
                        <p className="text-gray-600 text-center">{item.desc}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}