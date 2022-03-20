async function drawChart(data, chatCanvas, label, color){
    new Chart (chatCanvas, {
        type: 'line',
        data: {
            labels: data[0], //Подписи оси x
            datasets: [{
                label: label, //Метка
                borderColor: color, //Цвет
                data: data[1], //Данные
                borderWidth: 2, //Толщина линии
                fill: true //Заполнять под графиком
            }
        ]},
        options: {
            responsive: true, //Вписывать в размер canvas
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    display: true
                }]
            },
            animation:{
                duration: 0
            }
        }
    });
}


function setAnimation(btn, chartBtnsSelector){
    document.querySelectorAll(chartBtnsSelector)
        .forEach(el => {
            el.style.opacity = 1
        })
    btn.style.opacity = 0.5
}


function createChartButton(btnSelector, chartBtnsSelector, setChartFunc, hours, amount){
    let chartBtn = document.querySelector(btnSelector)
    chartBtn.addEventListener("click", event=>{
        event.preventDefault()
        setChartFunc(hours, amount);
        setAnimation(chartBtn, chartBtnsSelector)
    })
}

