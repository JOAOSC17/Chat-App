// constantes
const messages = document.querySelector('.message-list')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')

// Button/Enter Key
btn.addEventListener('click', sendMessage)
input.addEventListener('keyup', function(e){ if(e.keyCode == 13) sendMessage() })

// Messenger Functions
function sendMessage(){
   const msg = input.value;
   input.value = ''
   writeLine(msg)
}
function addMessage(e){
   const msg = e.data ? JSON.parse(e.data) : e;
   writeLine(`${msg.FROM}: ${msg.MESSAGE}`)
}
function writeLine(text){
   const message = document.createElement('li')
   message.classList.add('message-item', 'item-secondary')
   message.innerHTML = 'Miguel says: ' + text
   messages.appendChild(message)
   messages.scrollTop = messages.scrollHeight;
}