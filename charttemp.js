var ctxTemp = document.getElementById('myChartTemp').getContext('2d');
var chartTemp = new Chart(ctxTemp, {
    type: 'line',
    data: {
        levels: [20, 15, 20, 40, 50],
        datasets:[{
        label: 'Температура',
        labels:[1, 2, 3 , 4 ,5],
        backgroundColor: 'rgb(255,255,255)',
        borderColor: 'rgb(223, 105, 58)',
        borderWidth: 2,
        data: [0, 5, 10, 15, 20, 25, 30, 35, 40],
        }]
        },
    options: {}
});