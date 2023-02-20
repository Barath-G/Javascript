let employees = [
    { id: 101, name: "Rahul Gandhi", sal: 45000 },
    { id: 102, name: "Sonia Gandhi", sal: 55000 }
]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = false
            flag ? resolve("Data Inserted Successfullly") : reject("Not Inserted")
            employees.push(emp)
        }, 4000)

    });
}
let getEmployees = () => {
    console.log("get Employee Fun")
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + ` <tr> 
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                            </tr>`
        }
        document.getElementById('tbody_Data').innerHTML = rows

    }, 2000)
}

createEmployee({ id: 103, name: "Priyanka", sal: 650000 })
    .then((msg) => {
        console.log(msg)
        getEmployees()
    })
    .catch((err) => { console.log(err) })