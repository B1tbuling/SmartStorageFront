let curentChartHoursHum = 0;

function setAnimationHum(btn){
    document.querySelectorAll(".button_day_hum").forEach(el => {el.style.opacity = 1})
    btn.style.opacity = 0.5
}

let dayBtnHum1 = document.querySelector(".hum1d")
dayBtnHum1.addEventListener("click", event=>{
    event.preventDefault()
    setChartHum(24,12);
    setAnimationHum(dayBtnHum1)
})

let dayBtnHum3 = document.querySelector(".hum3d")
dayBtnHum3.addEventListener("click", event=>{
    event.preventDefault()
    setChartHum(72,12);
    setAnimationHum(dayBtnHum3)
})

let dayBtnHum7 = document.querySelector(".hum7d")
dayBtnHum7.addEventListener("click", event=>{
    event.preventDefault()
    setChartHum(168,14);
    setAnimationHum(dayBtnHum7)
})

fetch("http://127.0.0.1:8000/hum?limit=1").then(
    resp => {
        resp.json().then(
            data => {
                document.querySelector(".statistics_number_style_hum").innerText = data[0].Humidity
            }
        )
    }
)

async function loadDataHum(hours,amount){
    resp = await fetch(`http://127.0.0.1:8000/getSensorsData?period=${hours}%20hours&amount=${amount}`)
    arr = await resp.json()
    data_time = arr.time
    data_hum = arr.hum
    data_time_1d = data_time.map((date_str) => `${new Date(date_str).getHours()}:${new Date(date_str).getMinutes() > 9 ? new Date(date_str).getMinutes() : '0' + new Date(date_str).getMinutes() }`)
    // console.log(data_hum)
    return [data_time_1d, data_hum]
}

async function drowChartHum(dataHum){
    var ctxHum = document.getElementById("myChartHum").getContext('2d');
    // ctxCo.canvas.height = 300;
    var myChartHum = new Chart (ctxHum, {
        type: 'line',
        data: {
            labels: dataHum[0], //Подписи оси x
            datasets: [{
                label: 'Значение влажности в %', //Метка
                borderColor: 'rgb(6, 197, 172)', //Цвет
                data: dataHum[1], //Данные
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

async function setChartHum(hours,amount){
    if (curentChartHoursHum === hours){return}
    curentChartHoursHum = hours;
    let dataHum = await loadDataHum(hours,amount);
    console.log(dataHum[0]);
    console.log(dataHum[1]);
    drowChartHum(dataHum);
}

setChartHum(24,12);