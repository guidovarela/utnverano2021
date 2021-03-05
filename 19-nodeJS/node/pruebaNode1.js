

let nombre = "Guido"
console.log(`${nombre} esta usando Node, desde un archivo!`)

function suma(num1,num2){
    return num1+num2
}

let monedas = ['peso','real','sol']

console.log(suma(50,60))
console.log(suma(200,41))
for (const i of monedas) {
    console.log(i)
}