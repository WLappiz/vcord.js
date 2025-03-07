// Client.js
const BaseClient = require('./extentions/BaseClient');
const ApiHandler = require('./extentions/ApiHandler');

class Client extends BaseClient {
    constructor(options = {}) {
        super(options);
        this.apiHandler = null;
    }

    login(token) {
        super.login(token);
        this.apiHandler = new ApiHandler(token);
    }

    async sendMessage(channelId, content) {
        if (!this.token) {
            throw new Error('Client is not logged in.');
        }

        if (!channelId || !content) {
            throw new Error('Channel ID and content are required to send a message.');
        }

        try {
            const message = await this.apiHandler.sendMessage(channelId, content);
            console.log('Message sent:', message);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
}

module.exports = Client;
