function middle() {
var price = prompt('Укажите цену за 1 кг.');
        var res;
        var weight;
        price = parseFloat(price.replace(/,/, '.'));

        if(isNaN(price) == true) {
            alert('Цена должна быть вещественным числом!');
            location.reload();
        } else {
            if ((typeof price == 'number')) {
                for (var i = 1; i <= 10; i++){
                    weight = i/10;
                    res = weight * price;
                    alert('Цена за ' + weight + ' кг равна ' + res + ' грн.');
                }
            } else {
                alert('Цена должна быть вещественным числом!');
                location.reload();
            }
        }
