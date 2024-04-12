const api = 'https://dummyjson.com/users/add';

const obj = {
      id: 31,
      firstName: 'subhash',
      lastName: 'Sathupalli',
      maidenName: 'nandan',
      gender: 'male',
      email: 'kdulyt@umich.edu',
      phone: '+48 143 590 6847',
      username: 'kdulyt',
      password: '5t6q4KC7O',
      birthDate: '1950-12-18',
}

fetch(api, 
{
    method: 'POST',
    headers: {
              "Content-Type": "application/json",
    },
    body: JSON.stringify(obj)
})
.then(response => {
    if (response.ok)
    {
          return response.json();
    }
    else
    {
        throw new Error('error in fetching the data');
    }
})

.then(data => {
    console.log('new user: ', data);
})

.catch(error => {
    console.error('Error:', error);
});