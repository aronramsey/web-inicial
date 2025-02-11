import './styles/style.css';
import { translations } from './translations';
import { renderChat } from './pages/chat'
// import { renderTerminal } from './pages/terminal'
//import { config } from './lib/wagmi'
//import { createWeb3Modal } from '@web3modal/wagmi' // Fixed import path

let currentLang = 'es'

// Configuración de Web3Modal
const projectId = 'TU_PROJECT_ID' // Reemplaza con tu Project ID de WalletConnect

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // Reemplaza con tu URL
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

//const chains = [config.chains[0]]

// Inicializar Web3Modal
/*createWeb3Modal({
  wagmiConfig: config,
  projectId: 'TU_PROJECT_ID',
  chains: config.chains,
})*/

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es'
  updateContent()
}

function updateContent() {
  const t = translations[currentLang as keyof typeof translations]
  const currentPath = window.location.hash

  let mainContent = ''
  let showFooter = true

  if (currentPath === '#chat') {
    mainContent = renderChat({ currentLang })
    showFooter = false
  } /* else if (currentPath === '#terminal') {
    mainContent = renderTerminal({ currentLang })
    showFooter = false
  } */ else {
    mainContent = `
      <div class="hero-section">
        <div class="hero-image">
          <img src="/images/robot-trader.png" alt="Robot Trader" />
        </div>
        <div class="hero-content">
          <h1>${t.hero.title}</h1>
          
          <div class="info-grid">
            ${t.hero.infoCards.map(card => `
              <div class="info-card">
                <p>${card}</p>
              </div>
            `).join('')}
          </div>

          <div class="phases">
            ${t.hero.phases.map((phase, index) => `
              <div class="phase">
                <span>0${index + 1}</span>
                <h3>${phase}</h3>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `
  }

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container">
      <div class="social-buttons">
        <a href="https://x.com/agenteloot" target="_blank" class="social-button">
          <svg class="twitter-icon" viewBox="0 0 24 24">
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
          </svg>
        </a>
      </div>

      <header>
        <nav>
          <div class="logo">
            <img src="/images/robot-logo.svg" alt="Robot Trading Logo" />
          </div>
          <div class="menu-toggle" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="nav-links">
            <a href="https://doc.agloot.tech" target="_blank">${t.menu.documentation}</a>
            <a href="https://app.safe.global/balances?safe=base:0x943a3590515986d576e8d1e5864ec2d8a28ea4ac" target="_blank">${t.menu.wallet}</a>
            <a href="#" onclick="showTerminalModal(event)">${t.menu.terminal}</a>
            <a href="#chat">${t.menu.chat}</a>
            <button class="lang-toggle" onclick="toggleLanguage()">${currentLang === 'es' ? 'EN' : 'ES'}</button>
            <button class="connect-wallet" onclick="window.open('https://creator.bid/agents/6721e0c8200c86fa5752a766', '_blank')">${t.menu.buy}</button>
          </div>
        </nav>
      </header>

      <main>
        ${mainContent}
      </main>

      ${showFooter ? `
        <footer class="ticker">
          <div class="ticker-wrapper">
            <div class="ticker-content">
              <div class="ticker-item">${t.ticker.agent}</div>
              <div class="ticker-item">${t.ticker.currentPrice}</div>
              <div class="ticker-item">${t.ticker.marketCap}</div>
              <div class="ticker-item">${t.ticker.holders}</div>
            </div>
          </div>
        </footer>
      ` : ''}

      <!-- Modal -->
      <div class="modal" id="terminalModal">
        <div class="modal-content">
          <h2 class="modal-title">${t.terminalModal.title}</h2>
          <p class="modal-text">${t.terminalModal.text}</p>
          <button class="modal-close" onclick="closeTerminalModal()">${t.terminalModal.close}</button>
        </div>
      </div>
    </div>
  `
}

// Añadir event listener para cambios en la ruta
window.addEventListener('hashchange', updateContent)

// Añadir función para el menú móvil
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links')
  const menuToggle = document.querySelector('.menu-toggle')
  navLinks?.classList.toggle('active')
  menuToggle?.classList.toggle('active')
}

// Hacer la función toggleMenu accesible globalmente
;(window as any).toggleMenu = toggleMenu

// Añadir funciones para el modal
function showTerminalModal(event: Event) {
  event.preventDefault()
  const modal = document.getElementById('terminalModal')
  modal?.classList.add('active')
}

function closeTerminalModal() {
  const modal = document.getElementById('terminalModal')
  modal?.classList.remove('active')
}

// Hacer las funciones accesibles globalmente
;(window as any).showTerminalModal = showTerminalModal
;(window as any).closeTerminalModal = closeTerminalModal

// Inicializar contenido
updateContent()

// Hacer la función toggleLanguage accesible globalmente
;(window as any).toggleLanguage = toggleLanguage

// Hacer las funciones accesibles globalmente
declare function handleSendMessage(): void
declare function handleExampleClick(): void 
declare function handleCopy(): void
declare function handleRegenerate(): void
declare function clearChat(): void

;(window as any).handleSendMessage = handleSendMessage
;(window as any).handleExampleClick = handleExampleClick
;(window as any).handleCopy = handleCopy
;(window as any).handleRegenerate = handleRegenerate
;(window as any).clearChat = clearChat
