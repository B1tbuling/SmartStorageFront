var ctxHum = document.getElementById('myChartHum').getContext('2d');
var chartHum = new Chart(ctxHum, {
    type: 'line',
    data: {
        levels: [0, 10, 15, 20, 25, 30],
        datasets:[{
        label: 'Влажность в %',
        labels:[1, 2, 3 , 4 ,5],
        backgroundColor: 'rgb(255,255,255)',
        borderColor: 'rgb(6, 214, 204)',
        borderWidth: 2,
        data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        }]
        },
    options: {}
});
