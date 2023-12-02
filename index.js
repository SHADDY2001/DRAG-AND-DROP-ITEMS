let lists = document.querySelectorAll('.list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');

lists.forEach(list => {
  list.addEventListener('dragstart', (e) => {
    let selected = e.target;

    // Event listeners for both boxes
    rightBox.addEventListener('dragover', preventDefault);
    leftBox.addEventListener('dragover', preventDefault);

    rightBox.addEventListener('drop', (e) => {
      rightBox.appendChild(selected);
      selected = null;
      removeEventListeners();
    });

    leftBox.addEventListener('drop', (e) => {
      leftBox.appendChild(selected);
      selected = null;
      removeEventListeners();
    });

    // Function to remove event listeners after dropping
    function removeEventListeners() {
      rightBox.removeEventListener('dragover', preventDefault);
      leftBox.removeEventListener('dragover', preventDefault);
      rightBox.removeEventListener('drop', removeEventListeners);
      leftBox.removeEventListener('drop', removeEventListeners);
    }
  });
});

function preventDefault(e) {
  e.preventDefault();
}
