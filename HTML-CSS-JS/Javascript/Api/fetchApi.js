async function fetchApi(){
    let y = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // let data = await y.json()
    let data = await y.text()
    console.log(data)
}
async function main() {
    console.log("Good Morning")
    console.log("God Afternoon")
    console.log("Good Evening")
    console.log("Good night")

    let data = await fetchApi()
    console.log(data)
    console.log("This is a my await function method")
    console.log("Faltu work")
}
main()



