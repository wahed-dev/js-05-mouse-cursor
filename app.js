let cursor = document.querySelector('.cursor');
let cursorPnt = document.querySelector('.cursorPnt')
function cursorMove(event) {
    let left = event.pageX;
    let top = event.pageY;
cursor.style.top = `${top}px`;
cursor.style.left = `${left}px`;
cursorPnt.style.top = `${top}px`;
cursorPnt.style.left = `${left}px`;
console.log(left, top);
}
window.addEventListener('mousemove', cursorMove);

let faqs = document.querySelectorAll('.faq');

function faqToogle(event) {
    for (let faq of faqs) {
        faq.classList.remove('show');
    }
    event.currentTarget.classList.add('show');
}

for (let faq of faqs) {
    faq.addEventListener('click', faqToogle);
}