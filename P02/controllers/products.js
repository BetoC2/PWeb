function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r = Math.random() * 16 | 0;
        let v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

class ProductException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Product {
    constructor(title, description, imageURL, unit, stock, pricePerUnit, category) {
        this._uuid = generateUUID();
        this._title = title;
        this._description = description;
        this._imageURL = imageURL;
        this._unit = unit;
        this._stock = stock;
        this._pricePerUnit = pricePerUnit;
        this._category = category;
    }


    set uuid(value) {
        throw new ProductException("Product uuids are auto-generated");
    }

    get uuid() {
        return this._uuid;
    }

    set title(value) {
        if (!value || typeof (value) != String)
            throw new ProductException("Product title must not be empty");
        this._title = value;
    }

    get title() {
        return this._title;
    }

    set description(value) {
        if (!value || typeof (value) != String)
            throw new ProductException("Product description must not be empty");
        this._description = value;
    }

    get description() {
        return this._description;
    }

    set imageURL(value) {
        if (!value || typeof (value) != String)
            throw new ProductException("ProductURL must not be empty");
        this._imageURL = value;
    }

    get imageURL() {
        return this._imageURL;
    }

    set unit(value) {
        if (!value || typeof (value) != String)
            throw new ProductException("Product Unit must not be empty");
        this._unit = value;
    }

    get unit() {
        return this._unit;
    }

    set stock(value) {
        if (typeof (value) != Number)
            throw new ProductException("Product Stock must be a Number");
        else if (value < 0)
            throw new ProductException("Product Stock can't be negative");
        this._stock = value;
    }

    get stock() {
        return this._stock;
    }

    set pricePerUnit(value) {
        if (typeof (value) != Number)
            throw new ProductException("Product Stock must be a Number");
        else if (value < 0)
            throw new ProductException("Product Stock can't be negative");
        this._pricePerUnit = value;
    }

    get pricePerUnit() {
        return this._pricePerUnit;
    }

    set category(value) {
        if (!value || typeof (value) != String)
            throw new ProductException("Product Category must not be empty");
        this._category = value;
    }

    get category() {
        return this._category;
    }

    static createFromJson(jsonValue) {
        const jsonObj = JSON.parse(jsonValue);
        return this.createFromObject(jsonObj)
    }

    static createFromObject(obj) {
        const newObj = new Product("", "", "", "", 0, 0, "");
        const { title, description, imageUrl, unit, stock, pricePerUnit, category } = newObj

        newObj.title = obj.title;
        newObj.description = obj.description;
        newObj.imageURL = obj.imageURL;
        newObj.unit = obj.unit;
        newObj.stock = obj.stock;
        newObj.pricePerUnit = obj.pricePerUnit;
        newObj.category = obj.category;
        return newObj;
    }

    static cleanObject(object) {
        const keys = ["uuid", "title", "description", "imageURL", "unit", "stock", "pricePerUnit", "category"];
        const obj = {};

        for (const element of keys) {
            if (object.hasOwnProperty(element)) {
                obj[element] = object[element];
            }
        }
        return obj;
    }
}

let producto1 = new Product("Producto1", "Producto1", "httpsURL", "pieze", 10, 15.5, "Chocolate");
let str = JSON.stringify(producto1);
console.table(producto1);

let producto2 = Product.createFromJson(str);
console.table(producto2)

