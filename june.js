var requestOptions = {
    method: 'GET',
  };
  
  fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
    .then(response => response.json())
    .then(result => {
    for(i=0,len=result.length;i<len;i++)
    {
        let title=result[i].title;
        let completed=result[i].completed;
        if( completed == true )
        {
            console.log('%c ' + result[i].title, 'color: green;');
        } else {
            console.log('%c ' + result[i].title, 'color: red;');
        }
    }
})