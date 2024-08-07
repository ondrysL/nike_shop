import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <div className="max-container flex flex-wrap justify-center items-center gap-9">
      {services.map((item, index) => (
        <ServiceCard key={index} {...item} />
      ))}
    </div>
  )
}

export default Services
