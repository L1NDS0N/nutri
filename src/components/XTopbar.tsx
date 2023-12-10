export default function XTopbar() {
    return (
        <header className="bg-slate-700 text-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold">Unidade de Atendimento Nutricional</h1>
            </div>
            <nav className="sm:block">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-slate-300">Configurações</a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-300">Sair</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }