//Convert the below into squares using map method
const nums = [1, 2, 3, 4, 5]
let square = nums.map((anyinitial)=>{
    return anyinitial * anyinitial
})
console.log(`Results of Task 1: `,square);

const names = ["alice", "bob", "charlie", "danielle"]
let capatalize= names.map((i)=>{ return i[0].toLocaleUpperCase()  + i.slice(1)})
console.log(`Results of Task 2: `,capatalize);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
let paragrapgFormate= pokemon.map((c)=>{return `<${c}>`})
console.log(`Results of Task 2: `,paragrapgFormate);