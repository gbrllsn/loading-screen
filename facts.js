const facts = [
  "CSS stands for Cascading Style Sheets.",
  "The first website went live in 1991.",
  "JavaScript was created in just 10 days.",
  "HTML5 introduced semantic elements like <article> and <section>.",
  "The 'Loading...' screen was popularized by early web applications."
];

let currentIndex = 0;
const factElement = document.getElementById('factDisplay');

function showNextFact() {
  factElement.style.opacity = 0;
  
  setTimeout(() => {
    factElement.textContent = facts[currentIndex];
    factElement.style.opacity = 1;
    
    currentIndex = (currentIndex + 1) % facts.length;
  }, 500); 
}

showNextFact();

setInterval(showNextFact, 4000);