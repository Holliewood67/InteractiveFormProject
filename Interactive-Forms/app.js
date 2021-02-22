var checkbox = document.getElementById('petCheckbox');
var selectionDiv = document.getElementById('petsSelection');
var saveForm = document.getElementById('saveForm');

checkbox.addEventListener('change', function(event) {
    if (checkbox.checked == true) {
        selectionDiv.style.display = 'block';
    } else {
        selectionDiv.style.display = 'none';
    }
});

saveForm.addEventListener('submit', function(event) {
    event.preventDefault;
    var nameText = saveForm.elements[0].value;
    var addressText = saveForm.elements[1].value;
    var ageText = saveForm.elements[2].value;
    var doesHavePets = saveForm.elements[3].checked;
    var petText = 'No Pets';
    if (nameText == ''){
        alert('Please enter a name');
        return;
    }
    if (addressText == ''){
        alert('Please enter an address');
        return;
    }

    if (ageText == ''){
        alert('Please enter an age');
        return;
    }

    if (doesHavePets) {
        petText = saveForm.elements[4].value;
    }

    if (petText == 'Dog') {
        alert('Sorry, our dog capacity is full :(')
        return;
    }

    alert('Booking saved! Info:\n' + nameText + '\n' + addressText + '\n' + ageText + '\n' + petText)

});