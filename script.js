var trefi = document.getElementById('trefi');
var piki = document.getElementById('piki');
var chirvi = document.getElementById('chirvi');
var bubni = document.getElementById('bubni');
var image = document.getElementById('image');
var text = document.getElementById('text');
var field = document.getElementById('field');

trefi.onclick = function() {
    image.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjmjoRd6DVWfaNxdGXoFngfrFL2QIpR1ip5IsSTzePSwH-74B" alt="трефы">';
    text.innerHTML = 'Выбрано трефы';
};
piki.onclick = function() {
    image.innerHTML = '<img src="https://avatanplus.com/files/resources/mid/588d9448d2cbe159e90b3c9f.png" alt="пики">';
    text.innerHTML = 'Выбрано пики';
};
chirvi.onclick = function() {
    image.innerHTML = '<img src="http://ladyvenus.ru/uploads/uploaded_images/users/user9195/nrjake92yi.png" alt="червы">';
    text.innerHTML = 'Выбрано червы';
};
bubni.onclick = function() {
    image.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/SuitDiamonds.svg/240px-SuitDiamonds.svg.png" alt="бубны">';
    text.innerHTML = 'Выбрано бубны';
};
