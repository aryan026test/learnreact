const url = "https://api.weatherapi.com/v1/current.json?key=d85e8a05c4664617b3e161031242801&q=New York"

const myFunc = async () => {
  let a = await fetch(url);
  a = await a.json();
  console.log(a);
}

myFunc()
