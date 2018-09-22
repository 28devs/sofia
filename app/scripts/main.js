//
// radio input
//

const radio = document.querySelectorAll('[data-input-radio]');

if (radio) {
  radio.forEach(function(item, id, er) {
    item.addEventListener('click', function() {
      er.forEach(function(item) {
        item.classList.remove('checked');
      });
      this.classList.add('checked');
    });
  });
}

//
// checkbox input
//
var i = 0;
const checkbox = document.querySelectorAll('[data-input-checkbox]');
console.log(checkbox)
if (checkbox) {
  checkbox.forEach(function(item, id, er) {
    console.log(123)
    item.addEventListener('click', function() {
      i++
      console.log(i)
      this.classList.toggle('checked');
    });
  });
}