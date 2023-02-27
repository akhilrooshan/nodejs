function hello(name)
{
    console.log(`hello ${name}`)
}

function getName(greetfn)
{
    let name="akhil";
    greetfn(name)
    
}


getName(hello);