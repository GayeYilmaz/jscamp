//DAY 3
export default class UserService{
    constructor(loggerService) {
        this.users=[]
        this.loggerService=loggerService
       // this.users=getCustomerFromDb()
    }
    add(user){
        //API ye istek göndereceğimiz nokta
        //console.log("Kullanıcı eklendi"+user)
        this.users.push(user)
        this.loggerService.log(user)
    }
    list(){
        //console.log("Kullanıcı listelendi")
        return this.users
    }
    getById(id){
        //console.log("Kullanıcı getirildi")
        return this.users.find(u=>u.id===id)

    }
}