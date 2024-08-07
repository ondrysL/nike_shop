const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 shadow-xl px-10 py-16 rounded-[15px]">
      <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-palanquin font-bold text-3xl mt-4 leading-[30px]">{label}</h3>
      <p className="font-montserrat text-slate-gray text-lg mt-4 max-w-[280px] min-w-[200px]">{subtext}</p>
    </div>
  )
}

export default ServiceCard
