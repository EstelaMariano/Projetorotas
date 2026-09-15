import {Link} from 'react-router-dom'
import {Home, Info, Package, Mail} from 'lucide-react'

const NavBar = () => {
  return (
    
    <nav className="bg-amber-100 text-pink-500 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Projeto</span>
          </div>

            <div className="hidden md:flex space-x-2 items-center">
              <Link to="/" className="flex items-center gap-2 px-3 py-2 font-medium hover:text-pink-500"><Home/>Home</Link>
              <Link to="/sobre" className="flex items-center gap-2 px-3 py-2 font-medium hover:text-pink-500"><Info/>Sobre</Link>
              <Link to="/produtos" className="flex items-center gap-2 px-3 py-2 font-medium hover:text-pink-500"><Package/>Produtos</Link>
              <Link to="/contato" className="flex items-center gap-2 px-3 py-2 font-medium hover:text-pink-500"><Mail/>Contato</Link>
            </div>

        </div>
      </div>

    </nav>      
  
  )
}

export default NavBar
