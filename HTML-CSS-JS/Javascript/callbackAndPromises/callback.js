console.log("This is a callback function")
console.log("The Chhagan is a most wanted hacker in the world.")

setTimeout(() => {
    console.log("Todays News")
}, 0);


setTimeout(() => {
    console.log("This is a setTimeOut function in the javascript...")
}, 2000);

console.log("The End the this movie")

const callback = (arg) => {
    console.log(arg);
  
}

const loadScript = ( src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Chhagan");
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)