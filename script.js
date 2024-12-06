function mincost(arr)
{ 
  arr.sort((a, b) => a - b);
	let totalCost = 0
	while(arr.length > 1){
		firstSmall = arr.shift();
		secondSmall = arr.shift();
		let cost = firstSmall + secondSmall;
		totalCost += cost;
		arr.push(cost);
		arr.sort();
	}
	return totalCost;
}

module.exports=mincost;
