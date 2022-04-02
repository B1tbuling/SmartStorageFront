let button1 = document.getElementById("but1")
let button2 = document.getElementById("but2")
    button1.onclick = sensor;
    button2.onclick = user;

async function handleButtonClick(url) {
    fetch(url, {method: 'GET',headers: {'Content-Type': 'text/csv',},})
        .then((response) => response.blob())
        .then((blob) => {
        const url = window.URL.createObjectURL(
            new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', "Statistic.csv",);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        });
}

async function sensor(){
    let textInput = document.getElementById("in1");
    let input_one = textInput.value;
    handleButtonClick(`http://127.0.0.1:8000/getStatisticSensor?period=${input_one}`)
}

async function user(){
    let textInput = document.getElementById("in2");
    let input_one = textInput.value;
    handleButtonClick(`http://127.0.0.1:8000/getStatisticUser?period=${input_one}`)
}