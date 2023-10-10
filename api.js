async function apis(){
    let result =await fetch('https://jsonplaceholder.typicode.com/users')
    result = await result.json();
    console.log(result)

    document.getElementById('userData').innerHTML=result.map((user)=>
    
        `<tr>
        <td>${user.name}</td>
        <td>${user.Email}</td>
        <td>${user.Username}</td>
        <td>${user.Website}</td>
        <td>${user.phone}</td>
        
        </tr>`
    ).join("");
}
apis()