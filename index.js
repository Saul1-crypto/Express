const app = require("./src/app/app"); 
const {dbConnection} = require("./src/database/conexiones");
const port = 8080;


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);  
});

dbConnection(); 