/* In this lab, you will learn how to create a user feedback form for a 
luxury brand's products using HTML and JavaScript. You will discover 
how to design a structured form to collect diverse user information such 
as name, age, email, job, and product feedback. You will see how to use 
the JavaScript functions to manage form submission, capture input values, 
and dynamically display user-provided feedback on the webpage. You will 
also observe event handling mechanisms. */

function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
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

    document.getElementById('userInfo').style.display = 'block';
}

const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter'){
        submitFeedback();
    }
});