const mongoose = require('mongoose');

const dbConnection = async () => {

   try {

        await mongoose.connect('mongodb://127.0.0.1:27017/back-end-users17') //asincronica, nos permite ejecutar un codigo desde un externo
        console.log('Conectado a la base de datos');
   
   } catch (error) {

        console.log(error);
        
   }

}



module.exports = {dbConnection};