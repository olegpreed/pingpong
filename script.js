// Get references to the necessary elements
const usernameField = document.getElementById('profile-username');
const passwordField = document.getElementById('profile-password');
const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');

// Simulating fetching username from the backend
const fetchDataFromBackend = () => {
    const data = {
		username: 'example_username',
		password: 'example_password',
	};
    return data;
};

// Function to set the initial value of the username field
const setUserData = () => {
    const data = fetchDataFromBackend();
    usernameField.value = data.username;
	passwordField.value = data.password;
};

// Call the function to set initial username
setUserData();

// Function to toggle between edit and view modes
const toggleEditMode = () => {
    // Toggle the disabled attribute of the username field
    usernameField.disabled = !usernameField.disabled;

    // Toggle the visibility of buttons
    editButton.style.display = usernameField.disabled ? 'inline-block' : 'none';
    saveButton.style.display = usernameField.disabled ? 'none' : 'inline-block';

    // If entering edit mode, focus on the username field
    if (!usernameField.disabled) {
        usernameField.focus();
    }
};

// Event listener for the edit button
editButton.addEventListener('click', toggleEditMode);

// Event listener for the save button
saveButton.addEventListener('click', () => {
    // Save the updated username (here you can add your logic to save the username)
    // For demonstration, let's just log it to the console
    console.log('Updated username:', usernameField.value);

    // Toggle back to view mode
    toggleEditMode();
});
