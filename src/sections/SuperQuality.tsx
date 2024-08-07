import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex flex-col items-center md:flex-row gap-4 max-container">
      <div className="flex flex-col flex-1 gap-y-4 items-start">
        <h2 className="text-4xl font-bold leading-[60px]">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
        <p className="text-slate-gray max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="text-slate-gray max-w-lg info-text mb-4">Our dedication to detail and excellence ensures your satisfaction</p>
        <Button label="View Details" />
      </div>

      <div className="flex-1 flex justify-end items-center">
        <img src={shoe8} alt="quality img" width={570} height={522} />
      </div>
    </section>
  )
}

export default SuperQuality
