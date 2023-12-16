function Add(props){

    console.log(props)

    var x =props.x
    var y =props.y

    return <div> 
        {/* I am from Sqr components <br/>
        Value of x is {x} <br/> */}
        Addition of {x} and {y} is {x + y}
       
        </div>
    }
