let curentChartHours = 0

function setAnimation(btn){
    document.querySelectorAll(".button_day_co").forEach(el => {el.style.opacity = 1})
    btn.style.opacity = 0.5
}

let dayBtn1 = document.querySelector(".co1d")
dayBtn1.addEventListener("click", event=>{
    event.preventDefault()
    setChart(24,12);
    setAnimation(dayBtn1)
})

let dayBtn3 = document.querySelector(".co3d")
dayBtn3.addEventListener("click", event=>{
    event.preventDefault()
    setChart(72,12);
    setAnimation(dayBtn3)
})

let dayBtn7 = document.querySelector(".co7d")
dayBtn7.addEventListener("click", event=>{
    event.preventDefault()
    setChart(168,14);
    setAnimation(dayBtn7)
})

fetch("http://127.0.0.1:8000/co?limit=1").then(
    resp => {
        resp.json().then(
            data => {
                document.querySelector(".co2_text").innerText = data[0].Co
            }
        )
    }
)

async function loadData(hours,amount){
    resp = await fetch(`http://127.0.0.1:8000/getSensorsData?period=${hours}%20hours&amount=${amount}`)
    arr = await resp.json()
    data_time = arr.time
    data_co = arr.co
    data_time_co = data_time.map((date_str) => `${new Date(date_str).getHours()}:${new Date(date_str).getMinutes() > 9 ? new Date(date_str).getMinutes() : '0' + new Date(date_str).getMinutes() }`)
    return [data_time_co, data_co]
}

async function drowChart(data){
    var ctxCo = document.getElementById("myChartCo").getContext('2d');
    // ctxCo.canvas.height = 300;
    var myChart = new Chart (ctxCo, {
        type: 'line',
        data: {
            labels: data[0], //Подписи оси x
            datasets: [{
                label: 'Значение уграного газа', //Метка
                borderColor: 'green', //Цвет
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

async function setChart(hours,amount){
    if (curentChartHours === hours){return}
    curentChartHours = hours
    let data = await loadData(hours,amount)
    console.log(data[0]);
    console.log(data[1]);
    drowChart(data)
}

setChart(24,12);