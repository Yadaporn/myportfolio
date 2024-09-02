// flip-card
const flipCard = document.getElementById('flipCard');
const flipButtons = document.querySelectorAll('.flip-btn');

flipButtons.forEach(button => {
    button.addEventListener('click', function() {
        flipCard.classList.toggle('flipped');
    });
});
// calculate age
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}
document.getElementById('age').textContent = ` ${calculateAge('2002-05-13')}`;

// openproject1
// function viewProject(projectId) {
//     const modal = document.getElementById('projectModal');
//     const modalTitle = document.getElementById('modalTitle');
//     const modalDescription = document.getElementById('modalDescription');
//     const modalImages = document.getElementById('modalImages');
    
//     modalImages.innerHTML = '';

//     if (projectId === 'mppn2024') {
//         modalTitle.textContent = 'MPPN 2024 Application';
//         modalDescription.textContent = 'Details about the MPPN 2024 Application project.';
//         modalImages.innerHTML = `
//             <img src="mppn1.jpg" alt="MPPN 2024 Image 1">
//             <img src="mppn2.jpg" alt="MPPN 2024 Image 2">
//             <img src="mppn3.jpg" alt="MPPN 2024 Image 3">
//         `;
//     } else if (projectId === 'workshopSattahip') {
//         modalTitle.textContent = 'Workshop Sattahip Website';
//         modalDescription.textContent = 'Details about the Workshop Sattahip Website project.';
//         modalImages.innerHTML = `
//             <img src="Picture1.png" alt="Workshop Sattahip Image 1">
//             <img src="Picture2.png" alt="Workshop Sattahip Image 2">
//             <img src="Picture3.png" alt="Workshop Sattahip Image 3">
//         `;
//     } else if (projectId === 'streetLight') {
//         modalTitle.textContent = 'Street Light Project';
//         modalDescription.textContent = 'Details about the Street Light project.';
//         modalImages.innerHTML = `
//             <img src="pcb.jpg" alt="Street Light Image 1">
//             <img src="Schematic_streetlight.jpg" alt="Street Light Image 2">
//         `;
//     }

//     modal.style.display = 'block';
// }

// function closeModal() {
//     const modal = document.getElementById('projectModal');
//     modal.style.display = 'none';
// }

// window.onclick = function(event) {
//     const modal = document.getElementById('projectModal');
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }

// openproject2
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const projectDetails = this.nextElementSibling;

        if (projectDetails.classList.contains('show')) {
            this.textContent = 'View Project';
            projectDetails.style.opacity = 0; 
            setTimeout(() => {
                projectDetails.classList.remove('show'); 
                projectDetails.style.maxHeight = "0";
            }, 500); 
        } else {
            this.textContent = 'Close Project';
            projectDetails.classList.add('show'); 
            projectDetails.style.maxHeight = projectDetails.scrollHeight + "px"; 
            setTimeout(() => {
                projectDetails.style.opacity = 1; 
            }, 10); 
        }
    });
});

// download-btn
function downloadFile() {
    const fileUrl = 'project-mcp.ino';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'project-mcp.ino';
    link.click();
}

// btn-top
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.btn-top');
    if (window.scrollY > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

//burgermenu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('animated-icon');
    const effect = document.querySelector('.animation-effect');

    icon.addEventListener('click', function() {
        effect.classList.add('explode');
        
        // Remove the class after animation ends to allow re-triggering
        effect.addEventListener('animationend', function() {
            effect.classList.remove('explode');
        });
    });
});