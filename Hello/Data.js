let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Priyanka", sal: 55000 },
{ id: 103, name: "Sonia", sal: 65000 },
{ id: 102, name: "Priyanka", sal: 55000 },
{ id: 102, name: "Priyanka", sal: 55000 },
{ id: 102, name: "Priyanka", sal: 55000 }, { id: 102, name: "Priyanka", sal: 55000 },
{ id: 102, name: "Priyanka", sal: 55000 },]

function employeeData() {
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.sal}</td>
                        </tr>`
    }

    //document.getElementById('tbody_Data').innerHTML = "Good "
    document.getElementById('tbody_Data').innerHTML = rows
}