const BASE_URL = 'https://agloot-eliza-production.up.railway.app'
const AGENT_ID = 'e8fef4b9-1ca3-0ff4-8b1c-fb2940282d24'

export const apiClient = {
    sendMessage: (message: string) => {
        console.log('Enviando mensaje a:', `${BASE_URL}/${AGENT_ID}/message`)
        return fetch(`${BASE_URL}/${AGENT_ID}/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                text: message,
                userId: 'user',
                userName: 'User'
            })
        }).then(async (resp) => {
            if (!resp.ok) {
                const errorText = await resp.text()
                console.error('Error response:', errorText)
                throw new Error('Error al enviar el mensaje')
            }
            const messages = await resp.json()
            console.log('Mensajes recibidos:', messages)
            
            // Convertir los mensajes a HTML con saltos de línea
            const combinedText = messages
                .map((msg: { text: string }) => msg.text.split('\n').join('<br>'))
                .join('<br><br>')
            
            return {
                text: combinedText,
                timestamp: Date.now(),
                isUser: false,
                isHtml: true // Flag para indicar que el contenido es HTML
            }
        }).catch(error => {
            console.error('Error detallado:', error)
            throw error
        })
    }
} 