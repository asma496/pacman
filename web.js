

function searchRecipe()  {

    var search  =  document.getElementById('search');
    console.log(search.value) 
    const term = search.value;
    if(term.trim()){

    }else{
        alert("please enter the value")
    }
    
    var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    console.log(api2)
    /// api call
    fetch(api2) // Call the fetch function passing the url of the API as a parameter
    .then(res => res.json())
    // row.innerHtml = `<h2> search result for '${term}':<h2>`
    .then(function(data) {
        // Your code for handling the data you get from the API
        console.log(data.meals)
        const recipesArr = data.meals;
    
        var row  =  document.getElementById('row');
        
    
        for(let i = 0; i< recipesArr.length; i++){
        var div1 = document.createElement('div')
        var div2 = document.createElement('div')
        var img = document.createElement("img")
        div1.className = 'box';
        img.className="myimg"
       
        img.setAttribute("src" , recipesArr[i].strMealThumb);
        var text = document.createTextNode(recipesArr[i].strMeal);
    
        div1.appendChild(div2)
        div2.appendChild(img)
       div2.appendChild(text)
        row.appendChild(div1)

       
        
    }
       
    

    
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });
    search.value = '';

    }

    

    
      function searchRandom() {
        var api = 'https://www.themealdb.com/api/json/v1/1/random.php'
        fetch(api)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            var recipeSingle= data.meals
            for(let i = 0; i< recipeSingle.length; i++){
                
                var row  =  document.getElementById('row');
                var div1 = document.createElement('div')

                var div2 = document.createElement('div')
                var content = document.createElement('div')
                var img = document.createElement("img")
                img.setAttribute("src",recipeSingle[i].strMealThumb);
                img.className="myimg2"
                div1.className="box1"
                
                var textcontent = document.createTextNode(recipeSingle[i].strInstructions)
                content.appendChild(textcontent)
                div2.appendChild(img);
                var text = document.createTextNode(recipeSingle[i].strMeal)
                div1.appendChild(text)
                 row.appendChild(div1)
                 div1.appendChild(div2)
                 row.appendChild(content)
            
                    
            
            
            
                }
        })  

    }




   
   
   
   
   
    submitForm.addEventListener('submit', searchRecipe);

   
  
   
   
    
    