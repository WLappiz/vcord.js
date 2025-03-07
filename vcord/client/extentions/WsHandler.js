const WebSocket = require('./ws/ws');
const { GATEWAY_URL } = require('./config');

class WsHandler {
    constructor(client) {
        this.client = client;
        this.ws = null;
    }

    connect() {
        this.ws = new WebSocket(GATEWAY_URL);

        this.ws.on('open', () => {
            console.log('Connected to Discord Gateway');
            this.identify();
        });

        this.ws.on('message', (data) => {
            const payload = JSON.parse(data);
            this.handleEvent(payload);
        });

        this.ws.on('close', () => {
            console.log('Disconnected from Discord Gateway');
        });

        this.ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });
    }

    identify() {
        const identifyPayload = {
            op: 2,
            d: {
                token: this.client.token,
                intents: this.client.intents.intents,
                properties: {
                    $os: 'linux',
                    $browser: 'my_library',
                    $device: 'my_library'
                }
            }
        };
        this.ws.send(JSON.stringify(identifyPayload));
    }

    handleEvent(payload) {
        console.log('Event received:', payload);
    }
}

module.exports = WsHandler;
