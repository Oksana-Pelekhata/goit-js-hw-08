import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form')
const inputEl = document.querySelector('.feedback-form  input')
const textareaEl = document.querySelector('.feedback-form  textarea')

const formData = {
    email: '',
    message: '',
};

formEl.addEventListener('input', throttle(handleFormElMessage, 500))
formEl.addEventListener('submit', handleFormSubmit)

populateTextarea();

function handleFormElMessage(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-form-state');
    const parsedMessage = JSON.parse(savedMessage);

    if (parsedMessage) {
            inputEl.value = parsedMessage.email;
            textareaEl.value = parsedMessage.message;
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    console.log(formData)
    e.target.reset();
    localStorage.removeItem('feedback-form-state');
}


