// Function to handle form submission and generate the resume
function generateResume(event) {
    event.preventDefault(); // Prevent the default form submission
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var experience = document.getElementById('experience').value;
    // Create resume content
    var resumeContent = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n    ");
    // Display resume content
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeContent;
    // Show the edit and save buttons
    document.getElementById('editResumeButton').style.display = 'inline';
    document.getElementById('saveResumeButton').style.display = 'inline';
}
// Function to enable editing mode
function enableEditing() {
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.contentEditable = 'true'; // Make the resume editable
    resumeOutput.style.border = '1px solid #ccc'; // Add border to indicate edit mode
    resumeOutput.focus(); // Focus on the resume to start editing
}
// Function to save changes and disable editing mode
function saveChanges() {
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.contentEditable = 'false'; // Make the resume non-editable
    resumeOutput.style.border = 'none'; // Remove border when not in edit mode
}
// Function to initialize event listeners
function setupEventListeners() {
    var form = document.getElementById('resumeForm');
    var editButton = document.getElementById('editResumeButton');
    var saveButton = document.getElementById('saveResumeButton');
    // Check if elements exist before attaching event listeners
    if (form)
        form.addEventListener('submit', generateResume);
    if (editButton)
        editButton.addEventListener('click', enableEditing);
    if (saveButton)
        saveButton.addEventListener('click', saveChanges);
}
// Initialize event listeners when the page loads
setupEventListeners();
