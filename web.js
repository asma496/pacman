function searchRecipe(){
    var search  =  document.getElementById('search');
    console.log(search.value) 
    var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    console.log(api2)
    /// api call
    fetch(api2) // Call the fetch function passing the url of the API as a parameter
    .then(res => res.json())
    .then(function(data) {
        // Your code for handling the data you get from the API
        console.log(data.meals)
        const recipesArr = data.meals;
    
        var row  =  document.getElementById('row');
    
        for(let i = 0; i< recipesArr.length; i++){
        var div = document.createElement('div')
        var img = document.createElement("img")

        div.className = 'box';
        img.setAttribute("src",recipesArr[i].strMealThumb);
        img.className="myimg"
        div.appendChild(img);
        var text = document.createTextNode(recipesArr[i].strMeal)
        div.appendChild(text)
        row.appendChild(div)
    
        }
    
    
    
    
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });
    search.value = '';
    
    }
    function searchrandom(){
        var api ="https://www.themealdb.com/api/json/v1/1/random.php"
        fetch(api)
        .then(res=>res.json()
        .then(data =>{
            console.log(data)
            var recipesingle = data.meals
            for(let i = 0; i< recipesingle.length; i++){

        
        var row  =  document.getElementById('row');
        var div = document.createElement('div')
        var content = document.createElement('div')

        var text = document.createTextNode(recipesArr[i].strMeal)
            }
        }

    }

   
    