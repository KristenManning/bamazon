var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon_db',
  port: '8890'
});

connection.connect();

function displayProducts(){
	connection.query('SELECT * from products', function (error, results, fields) {
	  if (error) throw error;
	  for (item in results){
	  	console.log(results[item].product_name)
	  	console.log("")
	  	console.log("ID: ", results[item].id)
	  	// console.log("Department ID: ", results[item].department_id)
	  	console.log("Price: ", results[item].price)
	  	// console.log("Quantity Remaining: ", results[item].stock_quantity)
	  	console.log("--------------------------------------------")
	  }
	});
}

console.log("")
console.log("CURRENT INVENTORY: ")
console.log("")
displayProducts()

connection.end();

// connection.query('SELECT * from departments', function (error, results, fields)
// {
// 	console.log(results);
// 	console.log('\n');

// 	inquirer.prompt([
// 	{type: "input",
// 	  name: "department_id",
// 	  message: "Put the id of the department you want to view."}
// 	]).then(function(data){
// 		var department = data.department_id;

// 		connection.query('SELECT * from beers', function (error, results, fields) {
// 			console.log(results);
// 			console.log('\n');
// 			inquirer.prompt([
// 			{type: "input",
// 			  name: "product_id",
// 			  message: "Put the id of the product that you want."}
// 			]).then(function(data){
// 				console.log(department.data.product_id)
// 				//do an insert into mysql 
// 				// connection.query('INSERT into dranken_beers SET ?', {
// 				// 	beer_id : data.beer_id,
// 				// 	department_id : department
// 				// }, function (error, results, fields) {
// 				// 	console.log('insert complete')
// 				// });
// 			});
// 		});

// 	});
// });