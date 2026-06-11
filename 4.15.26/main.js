// let person = [
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
//     {id: 1, name: "Ali", age: 19},
// ]



// const wrapper = document.getElementById("container"); 


// fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
//        .then(response = response.json())
//        .then(data =>{
//         console.log(data);
//         renderData(data)
//        })
//         .catch(
//             alert("Serverta xatolik yuz berdi")
//         )

// function renderData(data){
//     const cards  = users.map(el => `
//         <div class = "card" el =el.id>
//             <img class = "card-image" src=${el.avatar} alt="">
//             <h1>${el.name}</h1>
//         </div>
//         ` ).join();

//         wrapper.innerHTML = cards
// }    



const wrapper = document.getElementById("box");

// fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
.then(response => response.json())
.then(data =>{
    console.log(data);
    renderData(data)
})

function renderData(data){
    const cards = data.map(el => `
        <div el = el.id class = "card">
            <img class="img" src="https://picsum.photos/200/300/?random"=${el.avatar} alt=${el.name}>
            <h1>${el.name}</h1>
            <p>${el.id}</p>
        </div>
        `).join("")
        wrapper.innerHTML = cards;
}