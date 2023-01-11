const mongoose = require('mongoose')

async function main() {
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect("mongodb+srv://lucas_cfer:danielnanda244@cluster0.npnixgx.mongodb.net/?retryWrites=true&w=majority")
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = main