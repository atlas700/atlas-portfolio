import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-teal-500 min-w-full w-full p-5 text-white">
      <h2 className="font-bold text-center mb-4 text-2xl">Github Api</h2>
      <nav>
        <ul className="flex items-center justify-center gap-5">
          <li className="bg-teal-700 py-1 px-3 rounded text-white flex items-center justify-center">
            <Link href={'/about'} as={'about'} className="font-normal text-sm">
              About
            </Link>
          </li>
          <li className="bg-teal-700 py-1 px-3 text-white flex items-center justify-center">
            <Link href={'/code/repos'} className="font-normal text-sm">
              Repos
            </Link>
          </li>
          <li className="bg-teal-700 py-1 px-3 text-white flex items-center justify-center">
            <Link href={'/about/team'} className="font-normal text-sm">
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
