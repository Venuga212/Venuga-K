var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://anapioficeandfire.com/api/characters", requestOptions)
    .then(response => response.text())
    .then(result => 
        let gender=result[i].gender;
        let name=result[i].name;
        if (gender=="male"){
            console.log(result[i].name);
        }        
    )
    