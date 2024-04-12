const api = 'https://dummyjson.com/users/31';

fetch(api, {
        method: 'DELETE',
        headers: {
                     "Content-Type": "application/json",
                 }
})

.then(response => 
{
        if (response.ok)
        {
          return response.json()
        }
        else
        {
          throw new Error('error in deleting the data');
        }
})

.then(data =>
{
    console.log('the deleted data is: ', data);
})

.catch(error => 
{
    console.error('Error:', error);
});