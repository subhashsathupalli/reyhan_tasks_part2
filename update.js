const api = 'https://dummyjson.com/users/update';

const obj = {
    id: 31,
    firstName: 'subbu'
}

fetch(api, 
    {
        method: 'PUT',
        headers: {
                 "Content-Type": "application/json",
                },
        body: JSON.stringify(obj)
})

.then(response => {
    if (response.ok)
    {
          return response.json()
    }
    else
    {
        throw new Error('error in updating the data');
    }
})

.then(data => {
    console.log('the updated data in the link: ', data);
})

.catch(error => {
    console.error('Error:', error);
});

          