// BaseClient.js
const GatewayIntents = require('./GatewayIntents');
const WsHandler = require('./WsHandler');

class BaseClient {
    constructor(options = {}) {
        if (!options.intents) {
            throw new Error('No intents provided. Please specify at least one intent.');
        }
        this.intents = new GatewayIntents(options.intents);
        this.token = null;
        this.wsHandler = null;
    }

    hasIntent(intent) {
        return this.intents.has(intent);
    }

    login(token) {
        if (!token) {
            throw new Error('Token is required to login.');
        }

        // Validate token format (example: basic validation, assuming token is a string of a specific length)
        if (typeof token !== 'string' || token.length !== 59) {
            throw new Error('Invalid token format.');
        }

        this.token = token;
        this.wsHandler = new WsHandler(this);
        this.wsHandler.connect();

        console.log('Logging in with token:', token);
    }
}

module.exports = BaseClient;
