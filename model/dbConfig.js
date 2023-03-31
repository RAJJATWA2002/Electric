import { Sequelize } from "sequelize";

const sequelize = new Sequelize("eshopapi1","root","raj9340649145",{
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(()=>{
    console.log("Databse connected..");
})
.catch(err=>{
    console.log(err);
})

export default sequelize;