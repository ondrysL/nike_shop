interface ButtonProps {
  label: string
  width?: number
  img?: any
  bgColor?: string
  borderColor?: string
}

const Button = ({ label,
  img,
  bgColor = "coral-red" }: ButtonProps) => {

  return (
    <button className={`flex justify-center items-center gap-x-2 rounded-full font-montserrat font-medium leading-none text-xl bg-${bgColor} px-6 py-4 text-white hover:bg-white hover:text-coral-red transition-all duration-500 border-2 border-coral-red`} >
      {label}
      {
        img && <img src={img} alt="icon" />
      }
    </button >
  )
}

export default Button
