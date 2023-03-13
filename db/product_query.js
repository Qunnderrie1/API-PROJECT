const  query  = require("./index.js")

const getAll = async () =>{
    return await query("SELECT * FROM products ")
}

const getOne = async (id) =>{
    return await query("SELECT * FROM products WHERE id = ?  " , [id])
}
const createOne = async (productsDetails) =>{
    return await query("INSERT INTO products SET ? " , [productsDetails])
}

const updateOne = async (productsDetails , productId) =>{
    return await query("UPDATE products SET ?  WHERE id = ? " , [productsDetails , productId])
}

const deleteOne = async (productId) =>{
    return await query("DELETE FROM products WHERE id = ? " , [productId])
}

const deleteByName = async (name) =>{
    return await query("DELETE FROM products WHERE productName = ? " , [name])
}



module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne,
    deleteByName
}