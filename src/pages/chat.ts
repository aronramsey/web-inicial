import '../styles/chat.css'
import { translations } from '../translations'
import { apiClient } from '../lib/api'
//import { isWalletConnected } from '../lib/wallet'

interface Message {
  text: string
  isUser: boolean
  timestamp: number
}

interface RenderChatProps {
  currentLang: string
}

let messages: Message[] = []
let isLoading = false
let currentLanguage = 'es'

function scrollToBottom(smooth = true) {
  const chatMessages = document.querySelector('.chat-messages')
  if (chatMessages) {
    chatMessages.scrollTo({
      top: chatMessages.scrollHeight,
      behavior: smooth ? 'smooth' : 'auto'
    })
  }
}

function initMessageObserver() {
  const chatMessages = document.querySelector('.chat-messages')
  if (!chatMessages) return

  const observer = new MutationObserver(() => {
    scrollToBottom()
  })

  observer.observe(chatMessages, {
    childList: true,
    subtree: true
  })
}

function renderConnectWallet() {
  const t = translations[currentLanguage as keyof typeof translations]
  
  return `
    <div class="connect-container">
      <div class="connect-content">
        <h2>🔐 Connect Wallet</h2>
        <p>Please connect your wallet to access the chat</p>
        <div class="connect-buttons">
          <button onclick="connectMetamask()" class="wallet-button metamask-button">
            <img src="/images/metamask.svg" alt="MetaMask" />
            MetaMask
          </button>
          <button onclick="connectWalletConnect()" class="wallet-button walletconnect-button">
            <img src="/images/walletconnect.svg" alt="WalletConnect" />
            WalletConnect
          </button>
        </div>
      </div>
    </div>
  `
}

function renderMessages() {
  const t = translations[currentLanguage as keyof typeof translations]
  
  if (messages.length === 0) {
    return `
      <div class="welcome-message">
        <h1>${t.chat.welcome}</h1>
        <p>${t.chat.description}</p>
      </div>
    `
  }

  return messages.map(message => `
    <div class="message ${message.isUser ? 'user-message' : 'bot-message'}">
      <div class="message-content">
        ${message.text}
      </div>
      <div class="message-timestamp">
        ${new Date(message.timestamp).toLocaleTimeString()}
      </div>
    </div>
  `).join('')
}

function updateUIAndScroll() {
  const chatMessages = document.querySelector('.chat-messages')
  if (chatMessages) {
    chatMessages.innerHTML = renderMessages()
    scrollToBottom(false) // Scroll instantáneo al actualizar
  }
}

async function sendMessage(message: string) {
  if (!message || isLoading) return
  
  isLoading = true
  const sendButton = document.querySelector('.send-button') as HTMLButtonElement
  if (sendButton) {
    sendButton.disabled = true
    sendButton.classList.add('loading')
  }
  
  messages.push({
    text: message,
    isUser: true,
    timestamp: Date.now()
  })
  
  updateUIAndScroll()
  
  try {
    const response = await apiClient.sendMessage(message)
    if (Array.isArray(response)) {
      messages.push(...response)
    } else {
      messages.push(response)
    }
  } catch (error: any) {
    console.error('Error en chat:', error)
    messages.push({
      text: `Error: ${error.message || 'Ha ocurrido un error inesperado'}`,
      isUser: false,
      timestamp: Date.now()
    })
  } finally {
    isLoading = false
    if (sendButton) {
      sendButton.disabled = false
      sendButton.classList.remove('loading')
    }
    updateUIAndScroll()
  }
}

function handleSendMessage() {
  const textarea = document.querySelector('.chat-input') as HTMLTextAreaElement
  const message = textarea.value.trim()
  if (!message) return
  
  textarea.value = ''
  sendMessage(message)
}

export function renderChat({ currentLang }: RenderChatProps) {
  currentLanguage = currentLang
  const t = translations[currentLang as keyof typeof translations]
  
  //if (!isWalletConnected()) {
  //  return renderConnectWallet()
  //}

  setTimeout(() => {
    initMessageObserver()
    scrollToBottom(false)
  }, 100)
  
  return `
    <div class="chat-container">
      <div class="chat-main">
        <div class="chat-messages">
          ${renderMessages()}
        </div>
        
        <div class="chat-input-container">
          <div class="chat-input-wrapper">
            <textarea 
              class="chat-input" 
              placeholder="${t.chat.placeholder}"
              rows="1"
              onkeydown="if(event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); handleSendMessage(); }"
            ></textarea>
            <button 
              class="send-button ${isLoading ? 'loading' : ''}" 
              onclick="handleSendMessage()"
              disabled="${isLoading}"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M2 12L20 4L12 20L10 14L2 12Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `
}

// Hacer las funciones accesibles globalmente
;(window as any).handleSendMessage = handleSendMessage
;(window as any).sendMessage = sendMessage 