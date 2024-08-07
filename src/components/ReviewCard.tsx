import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <img src={imgURL} alt="customer photo" height={120} width={120} className="rounded-full object-cover" />
      <p className="max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center items-center gap-x-2">
        <img src={star} alt="star image" />
        <p>{rating}</p>
      </div>
      <h2 className="font-bold text-2xl">{customerName}</h2>
    </div>
  )
}

export default ReviewCard
