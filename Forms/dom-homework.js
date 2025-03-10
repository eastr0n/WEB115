document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.getElementById('myDiv');
    
    const heading = document.createElement('h1');
    heading.textContent = "Welcome to DOM homework";
    heading.classList.add('highlight');
    myDiv.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = "This is your first DOM homework assignment";
    myDiv.appendChild(paragraph);
    
    const ul = document.createElement('ul');
    const items = ['Item 1', 'Item 2', 'Item 3'];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    myDiv.appendChild(ul);

    const button = document.createElement('button');
    button.textContent = "Add new list item";
    document.body.appendChild(button);

    let itemCount = 3;

    button.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = `New List Item ${itemCount + 1}`;
        newItem.style.color = getRandomColor();
        ul.appendChild(newItem);
        itemCount++;
    });

    myDiv.addEventListener('click', function() {
        myDiv.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
