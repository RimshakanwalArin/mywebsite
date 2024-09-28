
import Image from 'next/image';
import Link from 'next/link';
function Header() {
  return (
    <header className='flex justify-between bg-gradient-to-r from-purple-400 to-sky-300 fixed top-0 left-0 w-full'>
        {/* logo */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6jRrg_ox6NLea1HHyTdP4GyA1pJHB_MWvA&s" alt="logo pic"
        className='rounded-full w-24' />

        
      {/* navigation */}
      <nav >
        <ul className='flex gap-16 mt-10  md:mt-10 text-sm md:text-base'>
            <li className='rounded-full p-2 hover:font-bold bg-gradient-to-r from-purple-600 to-sky-600'><Link href="/">Home</Link></li>
            <li className='rounded-full p-2 hover:font-bold bg-gradient-to-r from-blue-500 to-sky-300'><Link href="/about">About</Link></li>
            <li className='rounded-full p-2 hover:font-bold bg-gradient-to-r from-pink-500 to-sky-600'><Link href="/contect">Contect</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header