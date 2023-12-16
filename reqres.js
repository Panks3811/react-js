function Reqres(){

    fetch(`https://reqres.in/api/users?page=2`)
    .then(res => res.json())
    .then(result => {
        console.table(result)
    })

    return <>
        From Reqres <br/>
    </>
}