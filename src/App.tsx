import { useState } from 'react'
import { CreditCard, Hash, GraduationCap, ArrowRight, User } from 'lucide-react'

function App() {
  const [matricula, setMatricula] = useState('')
  const [cartao, setCartao] = useState('')
  const [salvarSessao, setSalvarSessao] = useState(false)

  const handleRecharge = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Iniciando recarga...\nMatrícula: ${matricula}\nCartão: ${cartao}\nSalvar sessão: ${salvarSessao ? 'Sim' : 'Não'}`)
  }

  return (
    <div className="min-h-screen bg-ufc-gray flex flex-col items-center w-full">
      {/* Header */}
      <header className="w-full bg-ufc-blue p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-3 max-w-4xl mx-auto w-full px-4">
          <div className="bg-white p-2 rounded-full shadow-sm">
            <GraduationCap className="text-ufc-blue" size={32} />
          </div>
          <div>
            <h1 className="text-white font-bold text-xl leading-tight">UFC</h1>
            <p className="text-ufc-yellow text-xs font-semibold uppercase tracking-wider">Universidade Federal do Ceará</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto p-6 flex flex-col justify-center">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

          {/* Card Header */}
          <div className="bg-gradient-to-r from-ufc-blue to-ufc-blue-light p-8 text-center relative overflow-hidden">
             {/* Abstract background shapes */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-5"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-ufc-yellow opacity-10"></div>

            <CreditCard className="mx-auto text-ufc-yellow mb-4" size={48} />
            <h2 className="text-2xl font-bold text-white mb-1">Recarga Universitária</h2>
            <p className="text-blue-100 text-sm">Insira seus dados para recarregar o cartão</p>
          </div>

          {/* Form */}
          <form onSubmit={handleRecharge} className="p-8 space-y-6">

            {/* Matrícula Input */}
            <div className="space-y-2">
              <label htmlFor="matricula" className="block text-sm font-semibold text-gray-700">
                Número de Matrícula
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  id="matricula"
                  placeholder="Ex: 123456"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufc-blue focus:border-ufc-blue transition-colors text-gray-900 bg-gray-50"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Número do Cartão Input */}
            <div className="space-y-2">
              <label htmlFor="cartao" className="block text-sm font-semibold text-gray-700">
                Número do Cartão
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Hash className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  id="cartao"
                  placeholder="Ex: 0000 0000 0000"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufc-blue focus:border-ufc-blue transition-colors text-gray-900 bg-gray-50"
                  value={cartao}
                  onChange={(e) => setCartao(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Salvar Sessão Checkbox */}
            <div className="flex items-center">
              <input
                id="salvar-sessao"
                type="checkbox"
                className="w-4 h-4 text-ufc-blue bg-gray-100 border-gray-300 rounded focus:ring-ufc-blue focus:ring-2"
                checked={salvarSessao}
                onChange={(e) => setSalvarSessao(e.target.checked)}
              />
              <label htmlFor="salvar-sessao" className="ml-2 text-sm font-medium text-gray-700">
                Salvar sessão
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-ufc-yellow hover:bg-ufc-yellow-light text-ufc-blue font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group mt-8"
            >
              Continuar para Pagamento
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </form>

          {/* Footer Info */}
          <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Dúvidas? Entre em contato com o Restaurante Universitário.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
