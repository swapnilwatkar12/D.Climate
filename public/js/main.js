const cityName = document.getElementById("cityName")
const submitBtn = document.getElementById("submitBtn")
const city_name = document.getElementById("city_name")
const temp = document.getElementById("temp")
const temp_status = document.getElementById("temp_status")

const getInfo = async(e) => {
    e.preventDefault()
    let cityVal = cityName.value
    console.log(cityVal)

    if(cityVal === ""){
        city_name.innerText = "Plz write the name before search"
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=689d581be4ad2ff0ee02725de752f55b`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp.innerText = `${arrData[0].main.temp}`
            temp_status.innerText = `${arrData[0].weather[0].main}`
        }
        catch{
            city_name.innerText = "Plz enter the city name properly"
        }
    }
}
submitBtn.addEventListener("click", getInfo)

