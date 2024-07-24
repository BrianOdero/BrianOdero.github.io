document.addEventListener("DOMContentLoaded", function() {
    const chatWidget = document.getElementById('chat-widget');
    const openChatBtn = document.getElementById('open-chat');
    const closeChatBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const messages = document.getElementById('messages');
    const emailInputArea = document.getElementById('email-input-area');
    const emailInput = document.getElementById('email-input');
    const saveEmailBtn = document.getElementById('save-email-btn');
    const phoneInputArea = document.getElementById('phone-input-area');
    const phoneInput = document.getElementById('phone-input');
    const savePhoneBtn = document.getElementById('save-phone-btn');
    const chatInputArea = document.getElementById('chat-input-area');
    let userEmail = '';
    let userPhone = '';

    // Open the chat widget
    openChatBtn.addEventListener('click', function() {
        chatWidget.style.display = 'flex';
        openChatBtn.style.display = 'none';
    });

    // Close the chat widget
    closeChatBtn.addEventListener('click', function() {
        chatWidget.style.display = 'none';
        openChatBtn.style.display = 'block';
    });

    // Save the email address and show the phone input area
    saveEmailBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();
        if (validateEmail(email)) {
            userEmail = email;
            emailInputArea.style.display = 'none';
            phoneInputArea.style.display = 'flex';
            appendMessage('bot', `Thank you! We have saved your email: ${userEmail}. Please enter your phone number.`);
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Save the phone number and show the chat input area
    savePhoneBtn.addEventListener('click', function() {
        const phone = phoneInput.value.trim();
        if (validatePhone(phone)) {
            userPhone = phone;
            phoneInputArea.style.display = 'none';
            chatInputArea.style.display = 'flex';
            appendMessage('bot', `Thank you! We have saved your phone number: ${userPhone}. Please describe your issue.`);
        } else {
            alert('Please enter a valid phone number.');
        }
    });

    // Send a message
    sendBtn.addEventListener('click', function() {
        sendMessage();
    });

    // Send a message on Enter key press
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText !== '') {
            appendMessage('user', messageText);
            chatInput.value = '';

            // Simulate bot response and send complaint to Freshdesk
            setTimeout(function() {
                sendComplaintToFreshdesk(messageText);
            }, 500);
        }
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight; 
    }

    function sendComplaintToFreshdesk(details) {
        const freshdeskDomain = 'https://istlafrica.freshdesk.com'; 
        const freshdeskApiKey = 'dGoMOxDQWE3roOWnOtY'; 

        const messageWithPhoneNumber = `Client's Phone number: ${userPhone}   \n Clients Message:  ${details}`;

        fetch(`${freshdeskDomain}/api/v2/tickets`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(freshdeskApiKey + ':X'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: messageWithPhoneNumber,
                subject: 'Complaint from chat widget',
                email: userEmail,
                priority: 1,
                status: 2
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            appendMessage('bot', 'Your complaint has been logged. Your ticket number is ' + data.id + '. Please wait for our staff to get back to you.');
        })
        .catch(error => {
            appendMessage('bot', 'Sorry, there was an error logging your complaint. Please try again later.');
        });
    }

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        // Simple phone validation regex (allows only digits and should be 10 digits long)
        const re = /^\d{10}$/;
        return re.test(phone);
    }
});
