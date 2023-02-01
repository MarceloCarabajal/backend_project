class ProductManager {
    constructor(){
        this.products=[]
    }

    getProducts(){
        return this.products
    }
    
    getProductByID(id){
        const product = this.products.find( prod => prod.id === id )
        if (product) {
            return product;
        } else {
            return "Producto no encontrado";
        }

        product ? product : 'no existe id'
    }

    addProduct(newProduct){

        if(Object.values(newProduct).includes('') || Object.values(newProduct).includes(null) ){
            return console.log('campos vacios')
        } else {
            const product = this.products.find ( prod => prod.cod === newProduct.cod )
            if (product) {
                return console.log('producto ya existente')
            } else {
                const newID = ProductManager.idGenerator() 
                this.products.push({...newProduct, id: newID});
            }
        }
    }

    static idGenerator() {
        this.generatedID ? this.generatedID++ : this.generatedID = 1;
        return this.generatedID;
    }
}

class Producto {
    constructor(titulo, descripcion, precio, imagen, cod, stock){
    this.titulo= titulo
    this.descripcion= descripcion
    this.precio = precio
    this.imagen = imagen
    this.cod = cod
    this.stock = stock
    }

}

const manager1 = new ProductManager()
const producto1= new Producto('Fideo', 'Que mas queres', 13, 'sin imagen', 'abc123', 100)
const producto2 = new Producto('Carne', 'no es humana', 15, 'sin imagen', 'abc321', 50)
const productoVacio = new Producto ('','','','','','') 
const productoRepetido = {... producto1}


console.log(manager1.getProducts())
manager1.addProduct(producto1)
manager1.addProduct(producto2)

console.log(manager1.getProducts())

manager1.addProduct(productoVacio)
manager1.addProduct(productoRepetido)

console.log(manager1.getProductByID(1))
console.log(manager1.getProductByID(4))