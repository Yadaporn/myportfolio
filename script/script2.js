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
    const fileUrl = 'files/project-mcp.ino';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'project-mcp.ino';
    link.click();
}
function downloadFile_pdf() {
  const fileUrl = 'files/yada_resume.pdf';
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'resume_by_yadaporn.pdf';
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

// font aboutme
// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello World.', 'I am Ploy.', 'Web Developer.', 'Programmer.', 'IT.'], 'text', ['#1A237E', '#D32F2F', '#388E3C', '#F57C00', '#0288D1']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
}
