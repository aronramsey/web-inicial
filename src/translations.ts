interface Translation {
  menu: {
    documentation: string
    wallet: string
    terminal: string
    chat: string
    buy: string
  }
  hero: {
    title: string
    infoCards: string[]
    phases: string[]
  }
  ticker: {
    agent: string
    currentPrice: string
    marketCap: string
    holders: string
  }
  terminalModal: {
    title: string
    text: string
    close: string
  }
  chat: {
    newChat: string
    welcome: string
    description: string
    placeholder: string
    send: string
    history: string
  }
  terminal: {
    newChat: string
    welcome: string
    description: string
    placeholder: string
    sending: string
    error: string
    thinking: string
    regenerate: string
    copy: string
    copied: string
    stop: string
    clear: string
    examples: {
      title: string
      items: string[]
    }
  }
}

interface Translations {
  es: Translation
  en: Translation
}

export const translations: Translations = {
  es: {
    menu: {
      documentation: "Documentación",
      wallet: "Billetera",
      terminal: "Terminal",
      chat: "Chat",
      buy: "Comprar"
    },
    hero: {
      title: "AGENTE LOOT",
      infoCards: [
        "Lanzado desde Creator.bid",
        "Construido con ELIZA",
        "Potencial KOL de habla hispana",
        "Jugando con la API de Cookie"
      ],
      phases: [
        "FASE 1: RESPUESTAS AUTOMÁTICAS EN TWITTER - en vivo",
        "FASE 2: ACCESO A LA TERMINAL DE COOKIE",
        "FASE 3: CREACIÓN DE PRODUCTOS DEFAI"
      ]
    },
    ticker: {
      agent: "AGENTE LOOT",
      currentPrice: "PRECIO ACTUAL: $0.0007663",
      marketCap: "CAP. MERCADO: $16,116.00",
      holders: "HOLDERS: 96"
    },
    terminalModal: {
      title: "Terminal en Desarrollo",
      text: "La terminal está actualmente en desarrollo. Para acceder necesitarás 10,000 AGLOOT tokens. ¡Vuelve pronto!",
      close: "Cerrar"
    },
    chat: {
      newChat: "Nuevo Chat",
      welcome: "Bienvenido a AGLOOT Chat",
      description: "Tu asistente personal de trading e inversiones en crypto",
      placeholder: "Escribe tu mensaje aquí...",
      send: "Enviar",
      history: "Historial de chats"
    },
    terminal: {
      newChat: "Nueva Terminal",
      welcome: "Bienvenido a AGLOOT Terminal",
      description: "Tu asistente avanzado para análisis de mercado y trading en crypto",
      placeholder: "Escribe tu consulta aquí...",
      sending: "Enviando...",
      error: "Ha ocurrido un error. Por favor, intenta de nuevo.",
      thinking: "Analizando...",
      regenerate: "Regenerar análisis",
      copy: "Copiar",
      copied: "¡Copiado!",
      stop: "Detener análisis",
      clear: "Limpiar terminal",
      examples: {
        title: "Ejemplos de consultas:",
        items: [
          "Analiza el mercado actual de DeFi",
          "Muestra tendencias en el mercado de NFTs",
          "Análisis técnico de ETH/USD",
          "Principales DEX por volumen"
        ]
      }
    }
  },
  en: {
    menu: {
      documentation: "Documentation",
      wallet: "Wallet",
      terminal: "Terminal",
      chat: "Chat",
      buy: "Buy"
    },
    hero: {
      title: "LOOT AGENT",
      infoCards: [
        "Launched from Creator.bid",
        "Built with ELIZA",
        "Spanish-speaking KOL potential",
        "Playing with Cookie API"
      ],
      phases: [
        "PHASE 1: AUTOMATED TWITTER RESPONSES - live",
        "PHASE 2: COOKIE TERMINAL ACCESS",
        "PHASE 3: DEFAI PRODUCT CREATION"
      ]
    },
    ticker: {
      agent: "LOOT AGENT",
      currentPrice: "CURRENT PRICE: $0.0007663",
      marketCap: "MARKET CAP: $16,116.00",
      holders: "HOLDERS: 96"
    },
    terminalModal: {
      title: "Terminal Under Development",
      text: "The terminal is currently under development. You will need 10,000 AGLOOT tokens to access. Check back soon!",
      close: "Close"
    },
    chat: {
      newChat: "New Chat",
      welcome: "Welcome to AGLOOT Chat",
      description: "Your personal trading and crypto investment assistant",
      placeholder: "Type your message here...",
      send: "Send",
      history: "Chat history"
    },
    terminal: {
      newChat: "New Terminal",
      welcome: "Welcome to AGLOOT Terminal",
      description: "Your advanced market analysis and crypto trading assistant",
      placeholder: "Type your query here...",
      sending: "Sending...",
      error: "An error occurred. Please try again.",
      thinking: "Analyzing...",
      regenerate: "Regenerate analysis",
      copy: "Copy",
      copied: "Copied!",
      stop: "Stop analysis",
      clear: "Clear terminal",
      examples: {
        title: "Example queries:",
        items: [
          "Analyze current DeFi market",
          "Show NFT market trends",
          "Technical analysis of ETH/USD",
          "Top DEXs by volume"
        ]
      }
    }
  }
} 