// Ihor Bohush
const craftedAccordion = document.querySelector('.crafted__accordion');
const craftedAccordionIcon = document.querySelector('.crafted__accordion--icon');
const craftedAccordionForm = document.querySelector('.crafted__accordion--form');
const craftedAccordionItem = document.querySelector('.crafted__accordion--item').addEventListener('click', () => {
    craftedAccordionIcon.classList.toggle('active');
    craftedAccordionForm.classList.toggle('active');
    craftedAccordion.classList.toggle('active');
})

const craftedForm = document.getElementById('craftedform');
const craftedResult = document.getElementById('craftedresult');

craftedForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(craftedForm);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  craftedResult.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                craftedResult.innerHTML = json.message;
            } else {
                console.log(response);
                craftedResult.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            craftedResult.innerHTML = "Something went wrong!";
        })
        .then(function() {
            craftedForm.reset();
            setTimeout(() => {
                craftedResult.style.visibility = "hidden";
            }, 3000);
            craftedResult.style.visibility = "visible";
        });
});