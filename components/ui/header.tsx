import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
            <img src="../../public/images/DOGFILE.png" alt="logo" className="w-16 h-8" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://dogfile.netlify.app/register"
                  className="font-medium text-purple-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Registrar
                </Link>
              </li>
              <li>
                <Link href="https://dogfile.netlify.app/" className="btn-sm text-purple-800 bg-purple-400 hover:bg-purple-700 ml-3">
                  Entrar
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
