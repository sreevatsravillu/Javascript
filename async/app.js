

getTodos=(resource)=>{
        return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest();

   request.addEventListener('readystatechange',()=>{
   if(request.readyState===4&&request.status===200)
    {
        resolve(request.responseText);
    }
    else if(request.readyState===4)
    {    reject('could not fetch');
    }
})
request.open('GET',resource);
request.send();
        })
    
    
    
}


getTodos('https://jsonplaceholder.typicode.com/todos/').then(data=>{
    console.log('promise 1 resolved',data);
    return getTodos('https://jsonplaceholder.typicode.com/todos/')
}).then(data=>{
    console.log('promise 2 resolved',data);
    return getTodos('https://jsonplaceholder.typicode.com/todos/')
}).then(data=>{
    console.log('promise 3 resolved',data);
    
})
.catch(err=>{
    console.log(err);
})

// console.log(1);
// console.log(2);

// getTodos((err,data)=>{
//     console.log('callback fired');
//     if(err)
//     console.log(err);
//     else
//     console.log(data);
// });


// console.log(3);
// console.log(4);