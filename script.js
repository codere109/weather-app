var apiKey = `854fe3cbca41671d62b39103e8c525bd`

function saveToStorage (newCity){
    //save the new City

}

function api(cityToSearchFor) {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityToSearchFor}&appid=${apiKey}`)
        .then(response => {
            console.log(response)
            if(!response.ok){
                return alert("Please search for a valid city!")
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            saveToStorage(data.city.name)
            //clear your five day container
            for (let i = 0; i < data.list.length; i+=8) {
               makeFiveDayCard(data.list[i])  
            }
        })
        .catch(err => console.error(err));
}


function makeFiveDayCard (data){
    console.log("In my make five day card")
    console.log(data)
    //make the five day card and append it to where your five day card goes
    let fiveDayCard = [].append(makeFiveDayCard(data.list[i]));
}


//WHEN THEY SUBMIT THE FORM
//SEARCH FOR THE API THERE

document.getElementById('search').addEventListener("submit", getInputValue)

function getInputValue(event) {
    event.preventDefault()
    var inputValue = document.getElementById("city-search").value
    api(inputValue)
}




