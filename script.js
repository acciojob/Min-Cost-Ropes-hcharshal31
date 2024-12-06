function mincost(arr)
{ 
  arr.sort((a, b) => a - b);
  let totalCost = 0
  while(arr.length > 1){
    let firstSmall = arr.shift();
    let secondSmall = arr.shift();
    let cost = firstSmall + secondSmall;
    totalCost += cost;
    arr.push(cost);
    arr.sort((a, b) => a - b); // Add comparator here
  }
  return totalCost;
}

module.exports=mincost;