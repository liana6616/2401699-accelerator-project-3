const acc = document.getElementsByClassName('faq__item');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {

    this.classList.toggle('active');

    this.nextElementSibling.classList.toggle('show');
  };
}

document.querySelector('.faq__item:nth-child(3)').click();

document.addEventListener('DOMContentLoaded', () => {
  const parent = document.querySelector('.faq__item');
  if (parent.querySelector('active')) {
    parent.classList.add('styled');
  }
});
