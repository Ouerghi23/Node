const a=20
const b=30
//the old one
function somme(a,b){
    return a+b
}
//arrow frn
const sommeTotal =(a,b) => a+b
const randomFunction= (a,b)=>{
    const z=a+b
    const y=b-a
    return z+y
}
//regular expression 
const firstName="Ouerghi"
const lastName="Chaima"
console.log(firstName+lastName)
console.log(`${firstName}  ${lastName}`)
//spread object
const user={
    firstName,
    lastName,
    age:24

}
//console.log({...user, jobTitle:"developer"})
const newUser={...user, jobTitle:"developer"}
console.log(newUser)
//spread array
const arr1=[1,2,3]
const arr2=[4,5,6]
const arr3=[...arr1,...arr2]

//destructing the user object
const {jobTitle,age}=newUser
console.log(jobTitle,age)
//destructing array 
const [c,d,e]=arr3
console.log(c,d,e)