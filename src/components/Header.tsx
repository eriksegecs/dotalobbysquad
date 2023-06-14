
export function Header() {
    return (
        <nav className="z-50 sticky top-0 w-full fixed flex items-center justify-between flex-wrap bg-zinc-900 p-6 lg:pl-40">

            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-alt uppercase text-2xl tracking-tight">DotaLobbySquad</span>
            </div>
            
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

                <div className="text-sm lg:flex-grow lg:pl-20 items-center">
                <a href="https://www.lobbysquad.com.br/" className="font-alt block mt-4 lg:inline-block lg:mt-0 text-sm text-yellow-300 hover:text-yellow-300 mr-4">Home</a>
                <a href="#responsive-header" className="font-alt block mt-4 lg:inline-block lg:mt-0 text-sm text-white hover:text-yellow-300 mr-4 lg:pl-4">Conteúdo</a>
                <a href="#responsive-header" className="font-alt block mt-4 lg:inline-block lg:mt-0 text-sm text-white hover:text-yellow-300 mr-4 lg:pl-4">MMR</a>
                <a href="#responsive-header" className="font-alt block mt-4 lg:inline-block lg:mt-0 text-sm text-white hover:text-yellow-300 mr-4 lg:pl-4">Tabela</a>
                <a href="#responsive-header" className="font-alt block mt-4 lg:inline-block lg:mt-0 text-sm text-white hover:text-yellow-300 mr-4 lg:pl-4">Chaves</a>
                <a href="#responsive-header" className="font-alt block mt-4 lg:inline-block lg:mt-0 text-sm text-white hover:text-yellow-300 mr-4 lg:pl-4">Equipe</a>
                <a href="#responsive-header" className="z-100 font-alt block mt-4 lg:inline-block lg:mt-0 text-sm text-white hover:text-yellow-300 mr-4 lg:pl-4">Bordões</a>
                </div>

                <div className="items-end">
                <a href="#" className="inline-block text-sm font-alt uppercase px-4 py-2 border-2 border-yellow-300 rounded-full text-white hover:bg-yellow-300 mt-4 lg:mt-0 mr-20">Login</a>
                </div>

            </div>
        </nav>
    )   
}