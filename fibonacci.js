function fibonacci(n){
    if(n <= 2) return [0,1];

    const result = fibonacci(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
}

console.log(fibonacci(8));