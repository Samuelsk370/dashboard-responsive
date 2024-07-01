document.querySelector('.chat-input button').addEventListener('click', function() {
    const input = document.querySelector('.chat-input input');
    const message = input.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerHTML = `<p>${message}</p><span class="time">${new Date().toLocaleTimeString()}</span>`;
        document.querySelector('.chat-messages').appendChild(messageElement);
        input.value = '';
        document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
    }
});
