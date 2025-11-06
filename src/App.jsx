import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logoUrl from './assets/logo.png'
import rosto1Url from './assets/rosto1.png'
import rosto2Url from './assets/rosto2.png'
import rosto3Url from './assets/rosto3.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .plano-card')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn')
        }
      })
    }, {
      threshold: 0.1
    })

    elementsToAnimate.forEach(element => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }


  return (
    <div className="text-white min-h-screen gradient-bg overflow-x-hidden w-full">
      <div
        id="top-bar"
        className="fixed top-0 left-0 w-full flex justify-between items-center py-3 md:py-3.5 px-4 md:px-6 lg:px-12 xl:px-16 z-50 
       transition-all duration-300 bg-black/30 backdrop-blur-md border-b border-white/10"
      >


        <a
          href="#"
          className="relative z-[2] transition-all duration-300 hover:scale-110"
        >
          <img
            src={logoUrl}
            alt="Logo DevFlow"
            className="w-[80px] sm:w-[100px] md:w-[130px] h-auto rounded-xl"
          />
        </a>

        <div>

          <nav className="main-nav hidden md:flex gap-8 relative z-[2]">
            <a href="#sobre" onClick={closeMenu} className="text-base font-semibold text-white border-2 border-white rounded-xl px-4 py-2 transition-all duration-300 hover:bg-white hover:text-[#6A44FF] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(106,68,255,0.3)]">Sobre</a>
            <a href="#planos" onClick={closeMenu} className="text-base font-semibold text-white border-2 border-white rounded-xl px-4 py-2 transition-all duration-300 hover:bg-white hover:text-[#6A44FF] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(106,68,255,0.3)]">Planos</a>
            <a href="#feedbacks" onClick={closeMenu} className="text-base font-semibold text-white border-2 border-white rounded-xl px-4 py-2 transition-all duration-300 hover:bg-white hover:text-[#6A44FF] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(106,68,255,0.3)]">Feedbacks</a>
            <a href="#contato" onClick={closeMenu} className="text-base font-semibold text-white border-2 border-white rounded-xl px-4 py-2 transition-all duration-300 hover:bg-white hover:text-[#6A44FF] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(106,68,255,0.3)]">Contato</a>
          </nav>


          <button onClick={toggleMenu} className="md:hidden relative z-[1000] text-white bg-transparent border-none cursor-pointer p-0">
            {menuOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
          </button>


          <nav className={`fixed top-0 ${menuOpen ? "right-0" : "-right-full"} w-[70%] max-w-[300px] h-screen bg-[#1A1B2E] pt-24 px-5 pb-5 flex flex-col gap-4 z-[998] shadow-[-4px_0_20px_rgba(0,0,0,0.5)] transition-all duration-[400ms] md:hidden`}>
            <a href="#sobre" onClick={closeMenu} className="text-base font-semibold text-white rounded-md px-4 py-2 transition-all duration-300 hover:bg-white/10 hover:text-[#6A44FF]">Sobre</a>
            <a href="#planos" onClick={closeMenu} className="text-base font-semibold text-white rounded-md px-4 py-2 transition-all duration-300 hover:bg-white/10 hover:text-[#6A44FF]">Planos</a>
            <a href="#feedbacks" onClick={closeMenu} className="text-base font-semibold text-white rounded-md px-4 py-2 transition-all duration-300 hover:bg-white/10 hover:text-[#6A44FF]">Feedbacks</a>
            <a href="#contato" onClick={closeMenu} className="text-base font-semibold text-white rounded-md px-4 py-2 transition-all duration-300 hover:bg-white/10 hover:text-[#6A44FF]">Contato</a>
          </nav>
        </div>
      </div>


      <header className="relative z-10 min-h-[50vh] md:min-h-[40vh] pt-[170px] sm:pt-[180px] md:pt-[190px] pb-12 px-4 flex items-center justify-center">
        <div className="z-[2] text-center w-[95%] md:w-4/5 max-w-[800px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-shadow-strong leading-tight">
            Otimize seu fluxo de trabalho e desenvolva sem barreiras!
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-shadow-strong px-2">
            Encontre o seu Flow. Nós cuidamos da organização para que você possa se concentrar em resolver problemas e escrever código excepcional.
          </p>
          <a href="#planos" className="inline-block bg-[#6A44FF] text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-base sm:text-lg font-bold rounded-lg transition-all duration-300 hover:bg-[#5838d4] hover:shadow-[0_10px_20px_rgba(106,68,255,0.4)] hover:scale-105">
            Entre no Flow
          </a>
        </div>
      </header>



      <main>

        <section id="sobre" className="py-12 md:py-16 lg:py-20 scroll-mt-[80px] md:scroll-mt-[100px]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Feito de devs, para devs.</h2>
            <p className="text-center text-sm sm:text-base md:text-lg text-gray-400 max-w-[600px] mx-auto mt-6 md:mt-8 lg:mt-12 mb-8 md:mb-10 lg:mb-12 px-4">
              Nós entendemos a frustração de gerenciar múltiplos projetos...
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-around items-stretch">
              <div className="feature-card bg-[#0D1117] p-6 md:p-8 rounded-2xl transition-all duration-[600ms] hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Quadros Kanban Inteligentes</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-400">
                  Organize suas tarefas com quadros visuais e intuitivos...
                </p>
              </div>

              <div className="feature-card bg-[#0D1117] p-6 md:p-8 rounded-2xl transition-all duration-[600ms] hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Integração Profunda com GitHub</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-400">
                  Conecte seus repositórios e vincule commits, branches...
                </p>
              </div>

              <div className="feature-card bg-[#0D1117] p-6 md:p-8 rounded-2xl transition-all duration-[600ms] hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Relatórios de Produtividade</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-400">
                  Entenda onde seu tempo está sendo investido...
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="py-12 md:py-16 lg:py-20 scroll-mt-[80px] md:scroll-mt-[100px]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Escolha o plano perfeito para você.</h2>
            <p className="text-center text-sm sm:text-base md:text-lg text-gray-400 max-w-[600px] mx-auto px-4">
              Comece de graça e evolua conforme suas necessidades. Sem burocracia.
            </p>

            <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 mt-8 md:mt-10 lg:mt-12 items-stretch">
              <div className="plano-card bg-[#1A1B2E] p-6 sm:p-8 md:p-10 rounded-xl text-center w-full lg:w-[300px] border-2 border-primary transition-all duration-[600ms] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(106,68,255,0.3)] flex flex-col mx-auto max-w-[400px] lg:max-w-none">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Básico</h3>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Grátis</p>
                <ul className="list-none p-0 mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow">
                  <li className="text-sm md:text-base text-gray-400">Até 3 projetos</li>
                  <li className="text-sm md:text-base text-gray-400">Quadros Kanban</li>
                  <li className="text-sm md:text-base text-gray-400">Integração com GitHub (básica)</li>
                  <li className="text-sm md:text-base text-gray-400">2 membros por equipe</li>
                </ul>
                <a href="#" className="inline-block bg-transparent text-white border-2 border-white px-5 sm:px-6 md:px-7 py-2.5 md:py-3 text-base md:text-lg font-bold rounded-xl transition-all duration-300 hover:bg-white hover:text-[#1A1A2E] mt-auto">
                  Comece Grátis
                </a>
              </div>

              <div className="plano-card bg-[#1A1B2E] p-6 sm:p-8 md:p-10 rounded-xl text-center w-full lg:w-[300px] border-2 border-primary transition-all duration-[600ms] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(106,68,255,0.4)] lg:scale-105 flex flex-col mx-auto max-w-[400px] lg:max-w-none">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Pro</h3>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">R$29 /mês</p>
                <ul className="list-none p-0 mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow">
                  <li className="text-sm md:text-base text-gray-400">Projetos ilimitados</li>
                  <li className="text-sm md:text-base text-gray-400">Tudo do plano Básico</li>
                  <li className="text-sm md:text-base text-gray-400">Relatórios de produtividade</li>
                  <li className="text-sm md:text-base text-gray-400">Automações de fluxo de trabalho</li>
                </ul>
                <a href="#" className="inline-block bg-[#6A44FF] text-white px-5 sm:px-6 md:px-7 py-2.5 md:py-3 text-base md:text-lg font-bold rounded-xl transition-all duration-300 hover:bg-[#5838d4] hover:shadow-[0_10px_20px_rgba(106,68,255,0.4)] hover:scale-105 mt-auto">
                  Escolher Pro
                </a>
              </div>

              <div className="plano-card bg-[#1A1B2E] p-6 sm:p-8 md:p-10 rounded-xl text-center w-full lg:w-[300px] border-2 border-primary transition-all duration-[600ms] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(106,68,255,0.3)] flex flex-col mx-auto max-w-[400px] lg:max-w-none">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Empresarial</h3>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Sob Consulta</p>
                <ul className="list-none p-0 mb-6 md:mb-8 space-y-2 md:space-y-3 flex-grow">
                  <li className="text-sm md:text-base text-gray-400">Tudo do plano Pro</li>
                  <li className="text-sm md:text-base text-gray-400">Log de auditoria e segurança</li>
                  <li className="text-sm md:text-base text-gray-400">Suporte prioritário 24/7</li>
                  <li className="text-sm md:text-base text-gray-400">Onboarding dedicado</li>
                </ul>
                <a href="#contato" className="inline-block bg-transparent text-white border-2 border-white px-5 sm:px-6 md:px-7 py-2.5 md:py-3 text-base md:text-lg font-bold rounded-xl transition-all duration-300 hover:bg-white hover:text-[#1A1A2E] mt-auto">
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </section>


        <section id="feedbacks" className="py-12 md:py-16 lg:py-20 scroll-mt-[80px] md:scroll-mt-[100px]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Feedbacks dos nossos usuários</h2>
            <p className="text-center text-sm sm:text-base md:text-lg text-gray-400 max-w-[600px] mx-auto mt-6 md:mt-8 lg:mt-12 mb-8 md:mb-10 lg:mb-12 px-4">
              Devs que já estão utilizando dos benefícios dos nossos serviços!
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-around items-stretch">
              <div className="feedback-card bg-[#0D1117] p-6 md:p-8 rounded-lg transition-all duration-[600ms] hover:-translate-y-2 flex flex-col items-center text-center">
                <img
                  src={rosto1Url}
                  alt="Feedback de usuário 1"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#6A44FF] mb-4 md:mb-6"
                />
                <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4 md:mb-6 flex-grow">
                  "O DevFlow mudou a forma como eu gerencio meus projetos pessoais. A integração com o GitHub é simplesmente fantástica e os quadros Kanban são super intuitivos."
                </p>
                <strong className="text-base md:text-lg font-bold text-white">Juliana Silva</strong>
                <p className="text-xs md:text-sm text-[#6A44FF]">Desenvolvedora Frontend</p>
              </div>

              <div className="feedback-card bg-[#0D1117] p-6 md:p-8 rounded-lg transition-all duration-[600ms] hover:-translate-y-2 flex flex-col items-center text-center">
                <img
                  src={rosto2Url}
                  alt="Feedback de usuário 2"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#6A44FF] mb-4 md:mb-6"
                />
                <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4 md:mb-6 flex-grow">
                  "Finalmente uma ferramenta que entende o fluxo de um dev. Os relatórios de produtividade me ajudaram a ver onde eu estava perdendo tempo."
                </p>
                <strong className="text-base md:text-lg font-bold text-white">Marcos Andrade</strong>
                <p className="text-xs md:text-sm text-[#6A44FF]">Desenvolvedor Backend</p>
              </div>

              <div className="feedback-card bg-[#0D1117] p-6 md:p-8 rounded-lg transition-all duration-[600ms] hover:-translate-y-2 flex flex-col items-center text-center">
                <img
                  src={rosto3Url}
                  alt="Feedback de usuário 3"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#6A44FF] mb-4 md:mb-6"
                />
                <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4 md:mb-6 flex-grow">
                  "Eu uso o plano Pro para minha equipe pequena e é perfeito. A automação de fluxo de trabalho economizou horas do nosso desenvolvimento."
                </p>
                <strong className="text-base md:text-lg font-bold text-white">Ana Clara Ribeiro</strong>
                <p className="text-xs md:text-sm text-[#6A44FF]">Tech Lead</p>
              </div>
            </div>
          </div>
        </section>


        <section id="contato" className="py-16 md:py-24 lg:py-32 text-center scroll-mt-[80px] md:scroll-mt-[100px]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Fale Conosco.</h2>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 max-w-[700px] mx-auto mb-6 md:mb-10 px-4">
              Tem alguma dúvida, sugestão ou quer apenas trocar uma ideia? Adoraríamos ouvir você. Nos encontre em nossas redes ou nos envie um e-mail.
            </p>

            <div className="my-6 md:my-10">
              <a href="mailto:contato@devflow.com" className="inline-block text-xl md:text-2xl p-4 md:p-5 text-white border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1A1A2E] break-all">
                contato@devflow.com
              </a>
            </div>

            <div className="flex justify-center gap-6 md:gap-12 lg:gap-16 py-8 md:py-12 flex-wrap">
              <a href="#" aria-label="GitHub Profile" className="text-xl font-semibold text-gray-400 transition-colors duration-300 hover:text-white">
                <FaGithub className="w-7 h-7 md:w-8 md:h-8" />
              </a>
              <a href="#" aria-label="LinkedIn Profile" className="text-xl font-semibold text-gray-400 transition-colors duration-300 hover:text-white">
                <FaLinkedin className="w-7 h-7 w-8 h-8" />
              </a>
              <a href="#" aria-label="Twitter Profile" className="text-xl font-semibold text-gray-400 transition-colors duration-300 hover:text-white">
                <FaTwitter className="w-7 h-7 w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0D1117] py-6 md:py-10 px-4 md:px-5 mt-12 md:mt-16 border-t border-[#30363d]">
        <div className="flex flex-col items-center gap-3 md:gap-5">
          <p className="text-gray-400 text-xs md:text-sm text-center">&copy; 2025 DevFlow. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  )
}

export default App