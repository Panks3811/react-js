function Json() {

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(result => {
        console.table(result)
    })

    return <>
        From Json <br/>
    </>
}