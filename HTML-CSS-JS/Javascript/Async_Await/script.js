async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(400)
        }, 4000);
    })
}
async function main() {
    console.log("Good Morning")
    console.log("God Afternoon")
    console.log("Good Evening")
    console.log("Good night")

    let data = await getData()
    console.log(data)
    console.log("This is a my await function method")
    console.log("Faltu work")
}
main()