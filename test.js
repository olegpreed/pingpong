let user = {
	name: "John",
	age: 30,
  
	sayHi() {
	  console.log( this.name ); // leads to an error
	}
  
  };
  
  
  let admin = user;
  admin
  user = null; // overwrite to make things obvious

  admin.sayHi();