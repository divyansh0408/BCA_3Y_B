let student = {
    id: 1,
    fname: "Divyansh ",
    age: 20,
    isWorking: false,
}
let { id, fname, age } = student
let info = `
<h1> ${fname}</h1>
<h2> ${age}</h2>
<h3> ${id}</h3>
`
document.write(info)