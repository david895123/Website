
fetch("http://localhost:3001/getProducts")
    .then(response => {
        if(!response.ok)
        {
            throw new Error("Could not fetch resource");
        }

        return response.json();
    })
    
    .then(data => Object.keys(data).forEach(k=>{
        document.getElementById("text").textContent=
    }))

    .catch(error => console.log(error));