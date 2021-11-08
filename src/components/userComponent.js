//sonuna .js getir
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/loger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

//DAY 3
console.log("User component yüklendi.")

//classı new operatorü ile kullanabiliriz
let logger1=new MongoLogger()
let userService= new UserService(logger1)
let user1=new User(1,"Gaye","Yılmaz","manisa")
let user2=new User(2,"Elif","Yılmaz","Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(1))
userService.list()


//protottyping nesneye sonradan özellik ekleme
let customer ={id:1,firstName:"Engin"}
customer.lastName="Demiroğ"
console.log(customer.lastName)