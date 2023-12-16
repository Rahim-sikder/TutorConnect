// const tutorList = [
//     { id: 1, name: 'John Doe', education: 'Ph.D. in Physics', subjects: ['Physics', 'Math'], image: 'john.jpg' },
//     { id: 2, name: 'Jane Smith', education: 'M.A. in Literature', subjects: ['English', 'Literature'], image: 'jane.jpg' },
//     // Add more tutors as needed
// ];

// document.addEventListener('DOMContentLoaded', () => {
//     const tutorListContainer = document.getElementById('tutorList');
//     const tutorDetailsContainer = document.getElementById('tutorDetails');

//     // Populate tutor cards
//     tutorList.forEach(tutor => {
//         const tutorCard = document.createElement('div');
//         tutorCard.classList.add('tutorCard');
//         tutorCard.innerHTML = `
//             <img src="${tutor.image}" alt="${tutor.name}" width="100">
//             <h3>${tutor.name}</h3>
//             <p>${tutor.education}</p>
//         `;
//         tutorCard.addEventListener('click', () => showTutorDetails(tutor));
//         tutorListContainer.appendChild(tutorCard);
//     });

//     function showTutorDetails(tutor) {
//         // Display detailed tutor profile
//         tutorDetailsContainer.innerHTML = `
//             <h2>${tutor.name}</h2>
//             <p>${tutor.education}</p>
//             <p>Subjects: ${tutor.subjects.join(', ')}</p>
//             <button onclick="goBack()">Go Back</button>
//         `;
//         tutorDetailsContainer.classList.remove('hidden');
//         tutorListContainer.classList.add('hidden');
//     }

//     // Function to go back to the tutor list
//     window.goBack = function () {
//         tutorDetailsContainer.classList.add('hidden');
//         tutorListContainer.classList.remove('hidden');
//     };
// });


document.getElementById('profileLink').addEventListener('click', function() {
    var profileFormSection = document.getElementById('profileFormSection');
    if (profileFormSection.style.display === 'none' || profileFormSection.style.display === '') {
        profileFormSection.style.display = 'block';
    } else {
        profileFormSection.style.display = 'none';
    }
});
