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

function viewProductsForSale(){
	connection.query('SELECT * from products', function (error, results, fields) {
	  if (error) throw error;
	  for (item in results){
	  	console.log(results[item].product_name)
	  	console.log("")
	  	console.log("ID: ", results[item].id)
	  	// console.log("Department ID: ", results[item].department_id)
	  	console.log("Price: $", results[item].price)
	  	console.log("Quantity Remaining: ", results[item].stock_quantity)
	  	console.log("--------------------------------------------")
	  }
	  checkIfDone()
	});
}

function viewLowInv(){
	connection.query('SELECT * FROM products WHERE stock_quantity < 5', function (error, results, fields) {
	  if (error) throw error;
	  for (item in results){
	  	console.log(results[item].product_name)
	  	console.log("")
	  	console.log("ID: ", results[item].id)
	  	// console.log("Department ID: ", results[item].department_id)
	  	console.log("Price: $", results[item].price)
	  	console.log("Quantity Remaining: ", results[item].stock_quantity)
	  	console.log("--------------------------------------------")
	  }
	  checkIfDone()
	});
}

function checkIfDone(){
	inquirer.prompt([
		{type: "list",
		  name: "continue",
		  choices: ["Yes", "No"],
		  message: "Would you like to select another action?"}
		]).then(function(data){
				switch(data.continue) {
				    case "Yes":
				        selectAction()
				        break;
				    case "No":
				        console.log("Session Ended.")
				        connection.end()
				        break;
				}
			})
}

function selectAction(){
	inquirer.prompt([
		{type: "list",
		  name: "action",
		  choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
		  message: "Please select an action."}
		]).then(function(data){
				switch(data.action) {
				    case "View Products for Sale":
				        viewProductsForSale()
				        break;
				    case "View Low Inventory":
				        viewLowInv()
				        break;
				    case "Add to Inventory":
				        console.log("A2I")
				        break;
				    case "Add New Product":
				        console.log("ANP")
				        break;
				}
			})
	}
selectAction()

// 	inquirer.prompt([
// 			{type: "input",
// 			  name: "product_id",
// 			  message: "Select a product with its ID. "}
// 			]).then(function(data){
// 				var product_id = data.product_id
// 				inquirer.prompt([
// 					{type: "input",
// 					  name: "quant",
// 					  message: "How many units would you like to buy?"}
// 					]).then(function(data){
// 						var quant = data.quant
// 						connection.query('SELECT * from products WHERE id = ?', [product_id], function (error, results, fields) {
// 						  if (error) throw error;
// 						  product_name = results[0].product_name
// 						  product_price = results[0].price
// 						  in_stock = results[0].stock_quantity
// 						  if (quant > in_stock){
// 						  	console.log("Insufficient quantity!")
// 						  	console.log("Please choose a lower quantity or select a different product.")
// 						  	console.log("Current " + product_name + " inventory: " + in_stock)
// 						  	selectProduct()
// 						  }else{
// 						  	console.log("Purchase complete.")
// 						  	var new_row = {product_id: product_id, quantity_purchased: quant}
// 						  	connection.query('INSERT INTO sales SET ?', new_row, function (error, results, fields) {
// 							  if (error) throw error;
							  
// 							  console.log("Item: " + product_name)
// 							  console.log("Quantity Purchased: " + quant)
// 							  console.log("Unit Price: $" + product_price)
// 							  console.log("*******************************")
// 							  console.log("Transaction Cost: $" + product_price*quant)

// 							  inquirer.prompt([
// 									{type: "list",
// 									  name: "continue",
// 									  choices: ["Yes", "No"],
// 									  message: "Would you like to continue shopping?"}
// 									]).then(function(data){
// 											if (data.continue == "Yes"){
// 												selectProduct()
// 											}else{
// 												connection.end()
// 											}
// 										})
// 						  	})
// 						  }

// 						})
// 					});
// 				});


// }


// console.log("")
// console.log("ITEMS AVAILABLE FOR SALE: ")
// console.log("")
// displayProducts()
// connection.end();

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