// transition code for the hidden, show
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const getHiddenElems = document.querySelectorAll('.hidden');
getHiddenElems.forEach((el) => observer.observe(el));

// transition code for the complex and simple
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('complex');
        }
    });
});

const getHiddenElems2 = document.querySelectorAll('.simple');
getHiddenElems2.forEach((el) => observer2.observe(el));
