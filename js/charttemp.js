let curentChartHoursTemp = 0

createChartButton(".temp1d", ".button_day_temp", setChartTemp, 24, 12)
createChartButton(".temp3d", ".button_day_temp", setChartTemp, 72, 12)
createChartButton(".temp7d", ".button_day_temp", setChartTemp, 168, 14)


async function drawCircularTemp(){
    let resp = await fetch("http://45.93.200.185:22/temp?limit=1")
    data = await resp.json()
    document.querySelector(".statistics_number_style_temp").innerText = data[0].temperature
}

async function loadDataTemp(hours,amount){
    resp = await fetch(`http://45.93.200.185:22/getSensorsData?period=${hours}%20hours&amount=${amount}`)
    arr = await resp.json()
    data_time = arr.time
    data_temp = arr.temp
    data_time_temp = data_time.map(
        (date_str) => `${new Date(date_str).getHours()}:${new Date(date_str).getMinutes() > 9 ? new Date(date_str).getMinutes() : '0' + new Date(date_str).getMinutes() }`
    )
    return [data_time_temp, data_temp]
}

async function drawChatTemp(data){
    var ctxTemp = document.getElementById('myChartTemp').getContext('2d');
    drawChart(data, ctxTemp, 'Температура', 'rgb(223, 105, 58)')
}

async function setChartTemp(hours, amount){
    drawCircularTemp()
    if (curentChartHoursTemp === hours){return}
    curentChartHoursTemp = hours
    let dataDrowTemp = await loadDataTemp(hours,amount)
    drawChatTemp(dataDrowTemp)
}

setChartTemp(24,12)

let intervalTemp = setInterval(drawCircularTemp,1000)