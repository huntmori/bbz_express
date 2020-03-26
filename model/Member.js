// model/calc.js
class Member
{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    toString(){
        return 'my name is.....'+this.name+'...and..my age..is....'+this.age+'...';
    }
}

module.exports = Member;