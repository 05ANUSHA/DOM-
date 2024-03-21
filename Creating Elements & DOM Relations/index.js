// 1. Add a sub-heading after the main heading
const mainHeading = document.getElementById('main-heading');
const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality organic fruits online';
mainHeading.parentNode.insertBefore(subHeading, mainHeading.nextSibling);

// 2. Make the sub-heading text italic
subHeading.style.fontStyle = 'italic';

// 3. Add a paragraph tag before the unordered list
const fruitsList = document.querySelector('.fruits');
const totalFruitsPara = document.createElement('p');
totalFruitsPara.textContent = 'Total fruits: ' + fruitsList.children.length;
totalFruitsPara.id = 'fruits-total';
fruitsList.parentNode.insertBefore(totalFruitsPara, fruitsList);

// 4. Set an id of "fruits-total" on the paragraph tag
totalFruitsPara.id = 'fruits-total';
