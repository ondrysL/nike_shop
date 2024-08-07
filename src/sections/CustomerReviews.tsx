import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div>
        <h2 className="font-bold text-4xl font-palanquin text-center">What our <span className="text-coral-red">customers</span> say?</h2>
        <p className="m-auto mt-4 max-w-lg text-center info-text">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className="mt-24 flex flex-col gap-10 xl:flex-row justify-center items-center">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
