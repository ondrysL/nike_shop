import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button.tsx";


const SpecialOffer = () => {
  return (
    <section className="flex max-lg:flex-col-reverse max-container gap-10">
      <div className="flex flex-1 justify-center items-center">
        <img src={offer} alt="offer image" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-y-8">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <div className="font-montserrat font-light">
          <p className="text-slate-gray text-xl">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>

          <p className="text-slate-gray text-xl mt-4">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        </div>
        <div className="flex gap-x-5">
          <Button label="Shop Now" img={arrowRight} />
          <Button label="Learn More" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
