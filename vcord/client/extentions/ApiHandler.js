// ApiHandler.js
const https = require('https');
const { URL } = require('url');

class ApiHandler {
    constructor(token) {
        this.token = token;
        this.baseUrl = 'https://discord.com/api/v10';
    }

    sendMessage(channelId, content) {
        return new Promise((resolve, reject) => {
            const url = new URL(`/channels/${channelId}/messages`, this.baseUrl);
            const data = JSON.stringify({ content });

            const options = {
                method: 'POST',
                headers: {
                    Authorization: `Bot ${this.token}`,
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            };

            const req = https.request(url, options, res => {
                let body = '';

                res.on('data', chunk => {
                    body += chunk;
                });

                res.on('end', () => {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(JSON.parse(body));
                    } else {
                        reject(new Error(`Request failed with status code ${res.statusCode}`));
                    }
                });
            });

            req.on('error', error => {
                reject(error);
            });

            req.write(data);
            req.end();
        });
    }
}

module.exports = ApiHandler;
