import Button from "../components/Button.tsx"
import ShoeCard from "../components/ShoeCard.tsx"
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images";

import { useState } from "react"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const changeImg = (newImg) => {
    setBigShoeImg(newImg)
  }

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col justify-center xl:flex-row max-container">

      <div className="relative flex flex-col justify-center items-start w-full xl:w-2/5 pt-28 padding-x">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-[72px] leading-[85px] md:text-8xl font-bold z-10">
          <span className="xl:whitespace-nowrap xl:bg-white pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">
            Nike
          </span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg mt-10 mb-10 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop Now" img={arrowRight}></Button>

        <div className="flex justify-start w-full gap-x-10 mt-10">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="font-palanquin text-[50px] font-bold max-sm:text-[30px]" >{item.value}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center bg-primary max-xl:mt-10 max-xl:py-40 p-4 bg-center bg-cover bg-hero xl:rounded-bl-[15px] xl:h-[97vh]">
        <img
          className="object-contain relative z-10"
          src={bigShoeImg}
          alt="shoe image"
          width={610}
          height={502} />

        <div className="absolute bottom-[-20px] flex gap-x-10 px-6 sm:px-0">
          {shoes.map((item, index) => (
            <div key={index}>
              <ShoeCard image={item} callback={() => changeImg(item.bigShoe)} active={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
