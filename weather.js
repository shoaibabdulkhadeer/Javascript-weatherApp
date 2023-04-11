
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3e489d3c5c09911a578297513a6afb29`

{/* <input type="text" placeholder="Enter a city name" id="city"> */}
let city = document.getElementById("city")
let temp = document.getElementById("temp")
let CityName = document.getElementById("CityName")

 let search = async () => {

   if(city.value == ""){
      alert("Please Enter a city Name")
   }else{
         console.log("Typed value is : " + city.value)
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=3e489d3c5c09911a578297513a6afb29`
          let response = await fetch(url)
          let data = await response.json()
       console.log(data)

       CityName.innerHTML =`${data.name} / ${data.sys.country}`
       temp.innerHTML = data.main.temp
   }
 }

