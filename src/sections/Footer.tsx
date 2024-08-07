import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-col xl:flex-row justify-around">
        <div>
          <a href="/">
            <img src={footerLogo} alt="nike logo" className="w-[150px] h-[40px]" />
          </a>
          <p className="text-white-400 max-w-sm font-montserrat text-base leading-7 mt-6">Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards</p>
          <div className="flex gap-x-5 mt-6">
            {socialMedia.map((item) => (
              <div className="bg-white flex justify-center items-center w-[40px] h-[40px] rounded-full">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8 gap-x-10 gap-y-10 flex-wrap">
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h3 className="text-white-400 text-2xl font-bold">{item.title}</h3>
              <ul className="flex flex-col gap-y-2 mt-4">
                {item.links.map((link) => (
                  <li className="text-white-400">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
