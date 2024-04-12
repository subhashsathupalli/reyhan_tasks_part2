const api = 'https://jsonplaceholder.typicode.com/todos';

fetch(api, {method : 'GET'})
.then(response => {
  if (response.ok)
  {
          return response.json()
  }
  else
  {
        throw new Error('error in fetching the data');
  }
})

.then(data => {
    console.log('the data in the api link: ', data);
})

.catch(error => {
    console.error('Error:', error);
});

            