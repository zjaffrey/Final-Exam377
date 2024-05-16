/**
 * This function adds an element to the Unordered List
 * When an element is added to the list it should have an onclick that allows you to remove the same element
 //function addItem() {
    // This code is the Unique ID for the Button, do not change this
    const uniqueId = Math.random().toString(36).substr(2, 9);

}

/**
 * This function will be used to remove the item that was added in the unordered list
 */
//function removeItem(itemId) {

}



function addItem() {
    //  ID for the button
    const uniqueId = Math.random().toString(36).substr(2, 9);

    //input value
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();
    
    // input value is  empty
    if (itemValue === '') {
        alert('Please enter an item.');
        return;
    }

    // make new list item (li) element
    const listItem = document.createElement('li');
    listItem.id = uniqueId;

    // make text node with input and add 2 list item
    const textNode = document.createTextNode(itemValue);
    listItem.appendChild(textNode);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = function() {
        removeItem(uniqueId);
    };
    deleteButton.innerHTML = 'Delete';

    // add delete button item
    listItem.appendChild(deleteButton);

    // make sure its added to unordered list (ul)
    const shoppingList = document.getElementById('shoppingList');
    shoppingList.appendChild(listItem);

    // clear the input
    itemInput.value = '';
}

/**
 * remove the item that was added in the unordered list when deleted
 */
function removeItem(itemId) {
    // search items  ID and remove it from the list
    const item = document.getElementById(itemId);
    if (item) {
        item.remove();
    }
}
