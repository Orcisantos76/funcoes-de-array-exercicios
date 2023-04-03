const meuArray = [2,3,4,6,7,8,9,15]
console.log(meuArray)

const quint =meuArray.map((item)=>{
    return item*5
})

console.log('MeuArray', meuArray)
console.log('Multiplicado por 5', quint)

const metades =meuArray.map((item)=>{
    return item/2
})

console.log('Metades', metades)