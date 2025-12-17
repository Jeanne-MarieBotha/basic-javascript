async function getData() {
  const url =  "http://localhost:3000/people"
 const response = await fetch(url)
 const result = await response.json()
 console.log(result)
 

 const namesAscending = result.age
console.log(result.age)

const sortedPeopleASC = result.sort((a,b) => {
return a.age - b.age 

})

const justNames = result.map((person) => {
  return person.name
})
console.log(justNames)
console.log(sortedPeopleASC)

}

getData();

