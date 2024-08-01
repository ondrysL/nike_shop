import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react';

interface NavbarItem {
  href: string,
  label: string
}

const Nav = () => {
  const [nav, setNav] = useState(false)

  const toggle = () => {
    setNav(!nav)
  }

  return (
    <header className="absolute w-full px-8 py-8">
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29} />
        </a>
        <ul className='flex gap-x-8 max-lg:hidden items-center'>
          {
            navLinks.map((item: NavbarItem) => {
              return <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray hover:text-gray-800 cursor-pointer'
                >
                  {item.label}</a>
              </li>
            })
          }
          <button className='bg-coral-red text-primary font-bold px-4 py-2 rounded-[10px]'>Explore</button>
        </ul>
        <div onClick={toggle} className='hidden max-lg:block'>
          <img
            src={hamburger}
            className='cursor-pointer'
            alt="Menu"
            width={25}
            height={25} />
          <ul
            className={`${!nav && "left-[-100%]"} flex flex-col items-left gap-y-6 p-8 absolute left-0 top-0 h-[100vh] w-3/5 bg-white
                      border-r-slate-500 border-[1px] transition-all duration-500 ease-linear md:w-2/5`}>
            <a href="/">
              <img
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29} />
            </a>

            {
              navLinks.map((item: NavbarItem) => {
                return <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray hover:text-gray-800 cursor-pointer'
                  >
                    {item.label}</a>
                </li>
              })
            }
            <button className='bg-coral-red text-primary font-bold px-4 py-2 rounded-[10px] max-w-[120px]'>Explore</button>
          </ul>
        </div>
      </nav>
    </header >
  )
}

export default Nav
