import { navLinks } from '../constants'

interface NavbarItem {
  href: string,
  label: string
}

export const getLinks = (style: string) => {
  return navLinks.map((item: NavbarItem) => {
    return <li key={item.label}>
      <a
        href={item.href}
        // className='font-montserrat leading-normal text-lg text-slate-gray'
        className={style}
      >
        {item.label}</a>
    </li>
  })
}
