const accordionItems = document.querySelectorAll('.faq__accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.faq__accordion-header');
  const content = item.querySelector('.faq__accordion-content');

  header.addEventListener('click', () => {  
    accordionItems.forEach(el => {
      if (el !== item) {
        el.classList.remove('active');
        el.querySelector('.faq__accordion-content').style.maxHeight = null;
      }
    });

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});
