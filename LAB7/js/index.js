// JavaScript to handle form validation and modal display
const surveyForm = document.forms["surveyForm"];
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

surveyForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!surveyForm.checkValidity()) {
        surveyForm.classList.add("was-validated");
        return;
    }

    const name = surveyForm["name"].value;
    const age = surveyForm["age"].value;
    const gender = surveyForm["gender"].value;
    const email = surveyForm["email"].value;
    const phoneNumber = surveyForm["phoneNumber"].value;
    const satisfaction = surveyForm["satisfaction"].value;
    const contactMethod = surveyForm["contactMethod"].value;
    const comments = surveyForm["comments"].value;

    const modalContent = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Satisfaction Level:</strong> ${satisfaction}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
        <p><strong>Comments:</strong> ${comments}</p>
    `;
    
    document.getElementById("modalContent").innerHTML = modalContent;
    resultsModal.show();
    surveyForm.reset();
    surveyForm.classList.remove("was-validated");
});
