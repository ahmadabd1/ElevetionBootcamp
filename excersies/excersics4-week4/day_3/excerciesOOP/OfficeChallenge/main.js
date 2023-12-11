//write your code here to make the tests pass


class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}
class Employee {
    constructor(name) {
        this.name =name
    }
    work(office){
        for (let emp=0;emp<10;emp++){
            office.documents.push(new Document(this.name))
        }
    }
}

class Manager{
    constructor(name){
        this.employees = []
        this.name = name

    }
    hireEmployee(name){
        this.employees.push(new Employee(name))
    }
    askEmployeesToWork(office){
        for ( let emp of this.employees ){
            emp.work(office)
        
        }
    }
}

class Cleaner{
    constructor(name){
        this.name = name

    }
    clean(){
        console.log("Clean")
    }
}

class Office{
    constructor(){
        this.documents=[]
        this.managers=[]
        this.cleaners=[]
    }
    hireManager(name){
        this.managers.push(new Manager(name))
    }
    hireCleaner(name){
        this.cleaners.push(new Cleaner(name))
    }
    startWorkDay(){
        for(let m of this.managers){
            m.askEmployeesToWork(this)
            
        }
        for(let c of this.cleaners){
            c.clean()

        }
        
    }
}
