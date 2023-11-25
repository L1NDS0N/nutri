export default function XTopbar() {
    return (
        <header className="bg-gray-700 text-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold">Nutrição</h1>
            </div>
            <nav className="hidden sm:block">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-gray-300">Configurações</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">Sair</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }