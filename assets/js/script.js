document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let userInput = document.getElementById('user-input').value;
    fetch('/get-response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('chatbot-response').innerText = data.response;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});