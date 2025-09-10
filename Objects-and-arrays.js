//Object 
const user = {
    name:'Alice',
    age:25,
    greet(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

//Array
const colors = ['red', 'green', 'blue'];

//Array methods (ES6+)
colors.forEach(color=>console.log(color));
const length = colors.map(color=>color.length);