if('serviceWorker' in navigator){
      navigator.serviceWorker.register("js/sw.js")
        .then(() => console.log("Зарегистровали"))
        .catch(() => console.log("Получилась ошибка"))
}