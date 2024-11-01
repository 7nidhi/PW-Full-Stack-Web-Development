function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();

    if (itemValue !== "") {
        const li = document.createElement('li');
        li.textContent = itemValue;

    
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-btn');
        
    
        deleteBtn.onclick = function() {
            li.remove();
        };

        
        li.appendChild(deleteBtn);

    
        document.getElementById('shoppingList').appendChild(li);

    
        itemInput.value = '';
        itemInput.focus();
    }
}