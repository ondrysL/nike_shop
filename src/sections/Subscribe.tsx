import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-center items-center max-lg:flex-col gap-10">
      <h3 className="font-bold text-4xl font-palanquin">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h3>
      <div className="lg:max-w-[40%] w-full flex justify-between items-center max-sm:items-start max-sm:flex-col sm:border sm:border-slate-gray rounded-full p-2.5 gap-5">
        <input type="text" name="" id="" placeholder="subscribe@nike.com" className="max-sm:border max-sm:border-slate-gray max-sm:p-2.5 rounded-full" />
        <div className="flex mx-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up"></Button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
