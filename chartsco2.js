var ctxCo2 = document.getElementById('myChartCo').getContext('2d');
var chartHum = new Chart(ctxCo2, {
    type: 'line',
    data: {
        levels: [0, 10, 15, 20, 25, 30],
        datasets:[{
        label: 'Уровень CO2',
        backgroundColor: 'rgb(255,255,255)',
        borderColor: 'orange',
        borderWidth: 2,
        data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        }]
        },
    options: {}
});
