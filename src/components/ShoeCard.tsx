const ShoeCard = ({ image, callback, active }) => {
  return (
    <div
      className={`cursor-pointer bg-primary rounded-[15px] shadow-xl p-4 border-[1px] ${active === image.bigShoe ? "border-coral-red" : "border-transparent"} transition-all duration-500 hover:shadow-gray-300 bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 flex justify-center items-center`}
      onClick={callback}
    >
      <img src={image.thumbnail} alt="shoe picture" width={127} height={103} className="object-contain" />
    </div >
  )
}

export default ShoeCard
