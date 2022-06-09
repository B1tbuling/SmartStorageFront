let curentChartHours = 0


createChartButton(".co1d", ".button_day_co", setChartCo, 24, 12)
createChartButton(".co3d", ".button_day_co", setChartCo, 72, 12)
createChartButton(".co7d", ".button_day_co", setChartCo, 168, 14)


async function drawCircularCO(){
    let resp = await fetch("http://45.93.200.185:22/co?limit=1")
    data = await resp.json()
    document.querySelector(".co2_text").innerText = Math.floor(data[0].co)
}

async function loadData(hours,amount){
    resp = await fetch(`http://45.93.200.185:22/getSensorsData?period=${hours}%20hours&amount=${amount}`)
    arr = await resp.json()
    data_time = arr.time
    data_co = arr.co
    data_time_co = data_time.map((date_str) => `${new Date(date_str).getHours()}:${new Date(date_str).getMinutes() > 9 ? new Date(date_str).getMinutes() : '0' + new Date(date_str).getMinutes() }`)
    return [data_time_co, data_co]
}

async function drawChatCO(data){
    var ctxCo = document.getElementById("myChartCo").getContext('2d');
    drawChart(data, ctxCo, 'Значение уграного газа', 'green')
}


async function setChartCo(hours,amount){
    drawCircularCO()
    if (curentChartHours === hours){return}
    curentChartHours = hours
    let data = await loadData(hours,amount)
    drawChatCO(data)
}

setChartCo(24,12);

let intervalCo = setInterval(drawCircularCO,1000)
