import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

//DAY 3
export default class UserService{
    constructor(loggerService) {
        //this.users=[]
        this.employees=[]
        this.customers=[]
        this.errors=[]
        this.loggerService=loggerService
       // this.users=getCustomerFromDb()
    }
    ///REFACTOR YAPILACAK
    load(){
        for (const user of users) {
            console.log(user)
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                    
                   
                    this.customers.push(user)
                }
                    break;
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user)){
                    
                   
                        this.employees.push(user)
                    }
                    break;
            
                default:
                    this.errors.push(new DataError("Wrong user type",user))
                    break;
            }
            
        }

    }
    add(user){
        //API ye istek göndereceğimiz nokta
        //console.log("Kullanıcı eklendi"+user)
        //this.users.push(user)
        //this.loggerService.log(user)
        switch (user.type) {
            case "customer":
                if(!this.checkCustomerValidityForErrors(user)){
                this.customers.push(user)
                }
                break;
            case "employee":
                if(!this.checkEmployeeValidityForErrors(user)){
                this.employees.push(user)
                }
                break;
        
        
            default:
                
                this.errors.push(new DataError("This user can not be added.wrong user type ",user))
                break;
        }
        this.loggerService.log(user)
    }
    listCustomers(){
        //console.log("Kullanıcı listelendi")
        //return this.users
    }
    getCustomersById(id){
        //console.log("Kullanıcı getirildi")
        return this.customers.find(u=>u.id===id)

    }
    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return -1;
            }
            else if (customer1.firstName===customer2.firstName){
                return 0;

            }else{
                return 1;
            }
        })

    }
    ///React tarfında formik ve yup bunu halleden kütüphaneler 
    checkCustomerValidityForErrors(user){
        let requiredFields ="id firstName lastName age city".split(" ")
        //user["age"]
        let hasErrors=false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem. ${field} is required` , user ))
            }
            
        }
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem.${user.age} is not a number `,user))
        }
        return  hasErrors
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields ="id firstName lastName age city salary".split(" ")
        //user["age"]
        let hasErrors=false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem. ${field} is required` , user ))
            }
            
        }
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem.${user.age} is not a number `,user))
        }
        return  hasErrors
    }
}