/*import { getAccount, connect } from '@wagmi/core'
import { mainnet } from 'viem/chains'
import { config } from './wagmi'

export async function connectMetamask() {
  try {
    await connect(config, {
      connector: config.connectors[0]
    })
    window.location.reload()
  } catch (error) {
    console.error('Error connecting to MetaMask:', error)
  }
}

export async function connectWalletConnect() {
  try {
    await connect(config, {
      connector: config.connectors[1]
    })
    window.location.reload()
  } catch (error) {
    console.error('Error connecting to WalletConnect:', error)
  }
}

export function isWalletConnected() {
  const account = getAccount(config)
  return account.isConnected
}

// Make functions globally accessible
;(window as any).connectMetamask = connectMetamask
;(window as any).connectWalletConnect = connectWalletConnect */