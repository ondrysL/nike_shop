import { star } from "../assets/icons"

const ProductCard = ({ imgURL, name, price }) => {

  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full max-sm:items-center">
      <img src={imgURL} alt="product img" className="w-[280px] h-[280px]" />
      <div className="mt-4 flex gap-2">
        <img src={star} alt="star logo" width={24} height={24} />
        <p className="text-slate-gray">(4.5)</p>
      </div>
      <p className="text-lg font-bold  mt-2">{name}</p>
      <p className="text-xl font-bold text-coral-red mt-1">{price}</p>
    </div>
  )
}

export default ProductCard
