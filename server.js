const express = require('express');
const openai = require('openai');
const bodyParser = require('body-parser');

openai.apiKey = "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";  // Replace with your OpenAI API key

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/get-response', async (req, res) => {
    const prompt = req.body.message;
    const response = await openai.ChatCompletion.create({
        model: 'text-davinci-002',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt },
        ],
    });
    res.send({ response: response.choices[0].message.content });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});