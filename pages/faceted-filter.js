// not exactly vanilla as there is one lodash function

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allBasses = Array.from(document.querySelectorAll('.bass'));
var checked = {};

getChecked('brand');
getChecked('color');
getChecked('price');
getChecked('strings');

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allBasses.map(function (el) {
    var brand = checked.brand.length ? _.intersection(Array.from(el.classList), checked.brand).length : true;
    var color = checked.color.length ? _.intersection(Array.from(el.classList), checked.color).length : true;
    var price = checked.price.length ? _.intersection(Array.from(el.classList), checked.price).length : true;
    var strings = checked.strings.length ? _.intersection(Array.from(el.classList), checked.strings).length : true;
    if (brand && color && price && strings) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}