fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
}).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }) .then(data => {
    document.write(data); 
  }) .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });