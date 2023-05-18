const ProductManager = require('./productManager');

const ProductManagerTest1 = new ProductManager();

// ProductManagerTest1.getProducts()
//     .then(result => {
//         console.log(result.message)
//     })

ProductManagerTest1.addProduct(
    'grapefruits',
    'big grapefruits',
    750,
    'No image',
    'abc10',
    17
).then(result => {
    console.log(result.message)
})

// ProductManagerTest1.getProductById('moMdMPo')
//     .then(result => {
//         console.log(result.message)
//     })

// const fields = {thumbnail: "No image", code: "123456"}

// ProductManagerTest1.updateProduct('moMdMPo', 
// JSON.stringify(fields, null, 2))
//     .then(result => {
//         console.log(result.message)
//     })

// ProductManagerTest1.deleteProduct('HzkHhN8')
//     .then(result => {
//         console.log(result.message)
//     })