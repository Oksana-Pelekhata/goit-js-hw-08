import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form')

const formData = {
    email: '',
    message: '',
};

form.addEventListener('input', throttle(handleFormElMessage, 500))
form.addEventListener('submit', handleFormSubmit)

populateTextarea();

function handleFormElMessage(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
    try {
        const savedMessage = localStorage.getItem(STORAGE_KEY);
    
        if (savedMessage) {
            const parsedMessage = JSON.parse(savedMessage);
            // form.email.value = parsedMessage.email;
            // form.message.value = parsedMessage.message;
            Object.entries(parsedMessage).forEach(([key, value]) => {
    form[key].value = value
})
        }
    }
    catch(error) {
        console.error('Set state error: ', error.message);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    console.log(formData)

    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}



