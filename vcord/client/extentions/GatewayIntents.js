const Intents = require('./intents');

/**
 * @typedef {Object} GatewayIntents
 * @description Gateway Intents for Discord-like API
 * @see https://discord.com/developers/docs/topics/gateway#gateway-intents
 */
class GatewayIntents {
    static GUILDS = Intents.GUILDS;
    static GUILD_MEMBERS = Intents.GUILD_MEMBERS;
    static GUILD_BANS = Intents.GUILD_BANS;
    static GUILD_EMOJIS = Intents.GUILD_EMOJIS;
    static GUILD_INTEGRATIONS = Intents.GUILD_INTEGRATIONS;
    static GUILD_WEBHOOKS = Intents.GUILD_WEBHOOKS;
    static GUILD_INVITES = Intents.GUILD_INVITES;
    static GUILD_VOICE_STATES = Intents.GUILD_VOICE_STATES;
    static GUILD_PRESENCES = Intents.GUILD_PRESENCES;
    static GUILD_MESSAGES = Intents.GUILD_MESSAGES;
    static GUILD_MESSAGE_REACTIONS = Intents.GUILD_MESSAGE_REACTIONS;
    static GUILD_MESSAGE_TYPING = Intents.GUILD_MESSAGE_TYPING;
    static DIRECT_MESSAGES = Intents.DIRECT_MESSAGES;
    static DIRECT_MESSAGE_REACTIONS = Intents.DIRECT_MESSAGE_REACTIONS;
    static DIRECT_MESSAGE_TYPING = Intents.DIRECT_MESSAGE_TYPING;
    static MESSAGE_CONTENT = Intents.MESSAGE_CONTENT;
    static GUILD_SCHEDULED_EVENTS = Intents.GUILD_SCHEDULED_EVENTS;
    static AUTO_MODERATION_CONFIGURATION = Intents.AUTO_MODERATION_CONFIGURATION;
    static AUTO_MODERATION_EXECUTION = Intents.AUTO_MODERATION_EXECUTION;

    static Default() {
        return this.GUILDS | this.GUILD_MESSAGES;
    }

    constructor(intents = 0) {
        this.intents = intents;
    }

    has(intent) {
        return (this.intents & intent) === intent;
    }
}

module.exports = GatewayIntents;
