// for 문 예시
function emailsForCustomer(customers, goods, bests) {
	var emails = [];
	for(var i =0; i < customers.length; i++) {
		var customer = customers[i];
		var email = emailsForCustomer(customer, goods, bests);
		emails.push(email);
	}
}

// forEach()
function emailsForCustomer(customers, goods, bests) {
	var emails = [];
	forEach(customers, function(customer) {
		var email = emailsForCustomer(customer, goods, bests);
		emails.push(email);
	});
}

// map() - 어떤 배열의 모든 항목에 함수를 적용해 새로운 배열로 반환
function emailsForCustomer(customers, goods, bests) {
	return map(customers, function(customer) {
		return emailsForCustomer(customer, goods, bests);
	});
}

function map(array, f){
	var newArray = [];
	forEach(array, function(element) {
		newArray.push(f(element));
	});
	return newArray;
}

// filter() - 어떤 배열의 하위 집합을 선택해 새로운 배열로 반환
function selectBestCustomers(customers) {
	return filter(customers, function(customer) {
		return customer.purcharses.length >= 3;
	});
}

function filter(array, f) {
	var newArray = [];
	forEach(array, function(element) {
		if(f(element))
			newArray.push(element);
	});
	return newArray;
}

// reduce() - 어떤 배열의 항목을 조합해 최종값 반환
function countAllPurcharses(customers) {
	return reduce(
		customers, 0, function(total, customer) {
			return total + customer.purcharse.length;
		}
	);
}

function reduce(array, init, f) {
	var accum = init;
	forEach(array, function(element) {
		accum = f(accum, element);
	});
	return accum;
}