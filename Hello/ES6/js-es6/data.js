let data = [
    {id:101, name: "Naveen", Sal: 55000},
    {id:102, name: "Samantha", Sal: 5000},
    
]
console.log("okkk");
let createData = (da,callback)=>{
    setTimeout(()=>{
        data.push(da)
        callback()
    },4000)
}

let getData = ()=>{
    console.log("okk");
    setTimeout(()=>{
        let rows=" "
        for (das of data){
            rows = rows + `<tr>
            <td>${das.id}</td>
            </tr>`
            let rows=" "
        for (das of data){
            rows = rows + `<tr>
            <td>${das.name}</td>
            </tr>`
        }
        document.getElementById("abc").innerHTML = rows

    },2000)
}

createData({id:103, name:"Anushka", Sal: 10000},getData);
