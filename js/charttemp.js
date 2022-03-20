let curentChartHoursTemp = 0

function setAnimationTemp(btn){
    document.querySelectorAll(".button_day_temp").forEach(el => {el.style.opacity = 1})
    btn.style.opacity = 0.5
}

let dayBtnTemp1 = document.querySelector(".temp1d")
dayBtnTemp1.addEventListener("click", event=>{
    event.preventDefault()
    setChartTemp(24,12);
    setAnimationTemp(dayBtnTemp1)
})

let dayBtnTemp3 = document.querySelector(".temp3d")
dayBtnTemp3.addEventListener("click", event=>{
    event.preventDefault()
    setChartTemp(72,12);
    setAnimationTemp(dayBtnTemp3)
})

let dayBtnTemp7 = document.querySelector(".temp7d")
dayBtnTemp7.addEventListener("click", event=>{
    event.preventDefault()
    setChartTemp(168,14);
    setAnimationTemp(dayBtnTemp7)
})

fetch("http://127.0.0.1:8000/temp?limit=1").then(
    resp => {
        resp.json().then(
            data => {
                document.querySelector(".statistics_number_style_temp").innerText = data[0].Temperature
            }
        )
    }
)

async function loadDataTemp(hours,amount){
    resp = await fetch(`http://127.0.0.1:8000/getSensorsData?period=${hours}%20hours&amount=${amount}`)
    arr = await resp.json()
    data_time = arr.time
    data_temp = arr.temp
    data_time_temp = data_time.map((date_str) => `${new Date(date_str).getHours()}:${new Date(date_str).getMinutes() > 9 ? new Date(date_str).getMinutes() : '0' + new Date(date_str).getMinutes() }`)
    // console.log(data_temp)
    // console.log(data_time_temp)
    return [data_time_temp, data_temp]
}

async function drowChartTemp(dataDrowTemp){
    var ctxTemp = document.getElementById('myChartTemp').getContext('2d');
    // ctxTemp.height = 240
    var chartTemp = new Chart(ctxTemp, {
        type: 'line',
        data: {
            // levels: [10,11,12,13,14],//что это?
            labels: dataDrowTemp[0], //Подписи оси x
            datasets: [{
                label: 'Температура', //Метка
                borderColor: 'rgb(223, 105, 58)', //Цвет
                data: dataDrowTemp[1], //данные для постройки графика
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

async function setChartTemp(hours,amount){
    if (curentChartHoursTemp === hours){return}
    curentChartHoursTemp = hours
    let dataDrowTemp = await loadDataTemp(hours,amount)
    drowChartTemp(dataDrowTemp)
    // console.log(dataDrowTemp)
}

setChartTemp(24,12);


let loadTempInterval = setInterval(setChartTemp, 10000,curentChartHoursTemp,12)