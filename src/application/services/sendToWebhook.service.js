class SendToWebhook {
    constructor(webhookClient) {
        this.webhookClient = webhookClient;
    }

    async execute(payload) {
        await this.webhookClient.sendData(payload);
    }
}

module.exports = SendToWebhook;