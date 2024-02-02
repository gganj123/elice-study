function gugudan() {
    for (x = 1; x < 10; x++) {
        for (y = 1; y < 10; y++) {
            console.log(` ${x} * ${y} = ${res}`);
        }
    }
}

gugudan();

function promise3() {
    const threeSeconds = new Promise((resolve, reject) => {
        resolve(setTimeout(console.log('3초가 지났습니다.'), 3000))
    })
    const fiveSeconds = new Promise((resolve, reject) => {
        resolve(setTimeout(console.log('5초가 지났습니다.'), 5000))
    })
    const tenSeconds = new Promise((resolve, reject) => {
        resolve(setTimeout(console.log('10초가 지났습니다.'), 10000))
    })
}




  
promise3();


