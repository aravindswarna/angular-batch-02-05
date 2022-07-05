class Employee{

    age: number;
    firstName: string;
    lastName: string;
    constructor(age: number, firstName: string, lastname: string){
        this.age = age;
        this.lastName = lastname;
        this.firstName = firstName;
    }
    print(){
        console.log(this.firstName+" "+this.lastName);
    }

}

class Manager extends Employee{
    benefits: Array<String> = [];
    constructor(benefits: Array<String>, age: number, firstName: string, lastname: string){
        super(age, firstName, lastname);
        this.benefits = benefits
    }
}

let obj: Manager = new Manager(["snacks"],23, "Balu", "sub");
