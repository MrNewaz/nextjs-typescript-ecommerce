import Link from 'next/link'
import CartIcon from './CartIcon'

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-6">
      <Link href="/">
        <h1 className="font-lobster text-xl md:text-2xl lg:text-2xl">
          Newaz Cart
        </h1>
      </Link>
      <CartIcon />
    </nav>
  )
}

export default NavBar
