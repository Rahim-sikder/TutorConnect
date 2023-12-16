const profileFormHTML = `
    <div classclass="container mt-5" style="display: none;">
        <h2>Profile</h2>
        <form>
            <div class="mb-3">
                <label for="fullName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="fullName" placeholder="Enter your full name">
            </div>
            <div class="mb-3">
                <label for="education" class="form-label">Education</label>
                <input type="text" class="form-control" id="education" placeholder="Enter your education">
            </div>
            <div class="mb-3">
                <label for="subjects" class="form-label">Subjects</label>
                <input type="text" class="form-control" id="subjects" placeholder="Enter subjects you can teach">
            </div>
            <div class="mb-3">
                <label for="location" class="form-label">Location</label>
                <input type="text" class="form-control" id="location" placeholder="Enter your location">
            </div>
            <div class="mb-3">
                <label for="profilePicture" class="form-label">Profile Picture</label>
                <input type="file" class="form-control" id="profilePicture" accept="image/*">
            </div>
            <div class="mb-3">
                <label for="nidPicture" class="form-label">NID Picture</label>
                <input type="file" class="form-control" id="nidPicture" accept="image/*">
            </div>
            <div class="mb-3">
                <label for="scheduleTime" class="form-label">Schedule Time</label>
                <input type="text" class="form-control" id="scheduleTime" placeholder="Enter your schedule time">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
  </div>
`;

// Assuming you have a container element with an id, you can set the innerHTML
document.getElementById('profileFormSection').innerHTML = profileFormHTML;

document.getElementById('profileFormSection').addEventListener('click', function() {
    var profileFormSection = document.getElementById('profileFormSection');
    if (profileFormSection.style.display === 'none' || profileFormSection.style.display === '') {
        profileFormSection.style.display = 'block';
    } else {
        profileFormSection.style.display = 'none';
    }
});
