function add(a,b){
    return a+b
}

function subtract(a,b){
    if(!(a<b)){
        throw new Error('a should be greater then b')
    }
    return a-b

}

function multiply(a,b){
    return a*b
}

add(2,5)
add(10,25)
add(30,50)
sub(10,3)
multiply(10,2)
multiply(35,2)
multiply(35,2)
