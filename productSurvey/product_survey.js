const username = document.getElementById('name').ariaValueMax;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;
const submitButton=document.getElementById('submitBtn');
const userExperience = document.getElementById('userExperience').value;

function submitFeedback() {

document.getElementById('userInfo').style.display = 'block';

const username = document.getElementById('name').ariaValueMax;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;
const submitButton=document.getElementById('submitBtn');
const userExperience = document.getElementById('userExperience').value;

    alert('Thank you for your valuable feedback');

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = userExperience;
}

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        submitFeedback();
    }
});
