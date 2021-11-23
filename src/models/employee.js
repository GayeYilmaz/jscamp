import User from "./user.js"

export default class Employee extends User{ 
    constructor(id, firstName, lastName, city, age, salary) {
        //User classındaki constructorı kullanıyor.Verileri oraya gönderiyor.
        super(id,firstName,lastName,city,age)
        this.salary=salary
    }

}