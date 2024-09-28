// Get all the draggable items
const items = document.querySelectorAll('.item');

// Get all the bins
const paperBin = document.getElementById('paper-bin');
const plasticBin = document.getElementById('plastic-bin');
const metalBin = document.getElementById('metal-bin');

// Add drag and drop event listeners to items
items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

// Add drag event listeners to bins
[paperBin, plasticBin, metalBin].forEach(bin => {
    bin.addEventListener('dragover', dragOver);
    bin.addEventListener('drop', dropItem);
});

// Drag functions
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('dragging');
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function dropItem(e) {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(draggedItemId);

    if (validateDrop(draggedItem, e.target)) {
        e.target.appendChild(draggedItem);
        alert("Correct! " + draggedItem.innerText + " goes in the " + e.target.innerText + ".");
    } else {
        alert("Incorrect! Try again.");
    }
}

// Function to check if the item matches the bin
function validateDrop(item, bin) {
    if (bin.id === 'paper-bin' && (item.id === 'paper1' || item.id === 'paper2')) {
        return true;
    } else if (bin.id === 'plastic-bin' && (item.id === 'plastic1' || item.id === 'plastic2')) {
        return true;
    } else if (bin.id === 'metal-bin' && (item.id === 'metal1' || item.id === 'metal2')) {
        return true;
    }
    return false;
}
