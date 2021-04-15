const inputs = document.getElementsByClassName('input');
const submitButtom = document.getElementById('submit');

let parent;
let emptyElements = [];

const form = [
    {
        type: 'first name',
        message: 'First Name cannot be empty'        
    },
    {
        type: 'last name',
        message: 'Last Name cannot be empty'         
    },
    {
        type: 'email',
        message: 'Looks like this is not an email'         
    },
    {
        type: 'password',
        message: 'Password cannot be empty'         
    },
]