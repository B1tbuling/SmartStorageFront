let cart_template = '<div class ="card_wrapper">'+
                        '<div style="border: 2px solid rgb(245, 98, 0); border-radius: 10px; padding: 10px">'+
                            '<img src="../statistic/user-solid.svg" class="image_size" style="height: 100%; width: 50px;"> '+
                        '</div>'+
                        '<div style="display: flex; justify-content: row; width: 100%; color: rgb(65, 65, 65); font-family: Arial, Helvetica, sans-serif; text-align: center;">'+
                            '<div style="width: 65%; font-weight: bold;">'+
                                '<div style="height: 33%; font-size: 12px;">'+
                                    'Ф.И.О и должность:'+
                                '</div>'+
                                '<div style="height: 33%; font-size: 15px;">'+
                                    '{{Name}}' +
                               ' </div>'+
                                '<div style="height: 33%; font-size: 15px;">'+
                                    '{{Position}}'+
                                '</div>'+
                            '</div>'+
                            '<div style="width: 35%; padding-top: 15px;">'+
                                '<div>'+
                                    '<img src="{{Status}}" class="image_size" style="height: 100%; width: 50px; ">'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'


async function loadUsers(){
    resp = await fetch(`http://127.0.0.1:8000/users`)
    data = await resp.json()
    document.querySelector(".conteiner").innerHTML = null
    data.forEach(element => {
        let template = Hogan.compile(cart_template)
        let html = template.render({
            Name: element.Name,
            Position: element.position,
            Status: element.exist ? '../statistic/yes.svg' : '../statistic/no.svg'
        })
        let html_el = document.createElement('div') 
        html_el.innerHTML = html
        document.querySelector(".conteiner").append(html_el)
    });
}

loadUsers()

let loadUserInterval = setInterval(loadUsers, 10000)