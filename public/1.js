
document.getElementById("formLogin").addEventListener("submit", async (event) => {
    event.preventDefault();
    let temp = document.getElementById("temp");
    let wind = document.getElementById("wind");
    let cloud = document.getElementById("cloud");
    let pressure = document.getElementById("pressure");
    let title = document.getElementById("title");

    console.log(event.target.dataset)
    let name;
    let select = document.getElementById("sel").value;
    let write = document.getElementById('write').value;
    console.log(name)
    if (select !== '') {
        name = select;
    } else if (write !== '') {
        name = write;
    } else if (select !== '' && write !== '') {
        alert('Должно быть заполнено только одно поле для ввода!')
    }
    else {
        alert('Заполните поле для ввода!')
    }

    console.log(name)

    title.innerHTML = `Основная информация о погоде в городе ${name}`

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b31882c9d2eb27dd7cca7b302bcff398`)
        // fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=b31882c9d2eb27dd7cca7b302bcff398`)

        .then(resp => {
            console.log(resp)
            return resp.json();
        })
        .then(data => {
            console.log(data)
            if (data.cod === 200) {
                temp.innerHTML = Math.round(data.main.temp - 273) + "&deg";
                wind.innerHTML = `${data.wind.speed} мет. в сек.`;
                cloud.innerHTML = `${data.clouds.all} %`;
                pressure.innerHTML = `${data.main.pressure} <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BB%D0%BB%D0%B8%D0%BC%D0%B5%D1%82%D1%80_%D0%B2%D0%BE%D0%B4%D1%8F%D0%BD%D0%BE%D0%B3%D0%BE_%D1%81%D1%82%D0%BE%D0%BB%D0%B1%D0%B0">мм вод. столба</a>`
            } else if (data.message === "city not found") {
                title.innerHTML = 'Такого города не существует!'
            }

        });
})

