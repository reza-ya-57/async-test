



const test = () => {
    let count = 0;
    for(let i = 0; i < 4_000_000_000; i++) {
        count++
    }
    console.log('after for loop')
}

const test2 = async () => {
    setTimeout(() => {
        console.log('settimeout')
    }, 0)
    await test()
    console.log('end of the test2')
}

test2().then(res => {
    console.log('in then')
})
console.log('finish')