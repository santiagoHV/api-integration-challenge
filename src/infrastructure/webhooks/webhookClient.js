const axios = require("axios");

class WebhookClient {
    constructor(webhookUrl) {
        this.webhookUrl = webhookUrl;
    }

    async sendData(payload) {
        try {
            const response = await axios.post(this.webhookUrl, "JSON.stringify(payload)");
            console.log("Data sent to the webhook");
            console.log("Response: ", response.data);


            if (response.status !== 200) throw new Error("Failed to send data to the webhook");

            return response.data;
        } catch (error) {
            console.error("Failed to send data to the webhook", error);
            throw new Error("Failed to send data to the webhook");
        }
    }
}

module.exports = WebhookClient;