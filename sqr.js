
function Sqr(props){

    console.log(props)

    var x =props.x

    return <div> 
        {/* I am from Sqr components <br/>
        Value of x is {x} <br/> */}
        Square of {x} is {x * x}
        </div>
    }

    // custom attributes => Properties