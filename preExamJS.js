function sumAndProduct(input) {

    let n = Number(input[0]);
    let combinationFound = false;
    let combinations = 0;

    



    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sumNumbers = a + b + c + d;
                    let multNumbers = a * b * c * d;
                    if (sumNumbers === multNumbers && n % 10 === 5){
                        combinationFound = true;
                        combinations++;
                        console.log(`${a}${b}${c}${d}`);
                        break;
                    } else if (Math.trunc(multNumbers / sumNumbers) === 3 && n % 3 === 0){
                        combinationFound = true;
                        combinations++;
                        console.log(`${d}${c}${b}${a}`);
                        break;
                    }
                } if (combinations > 0){
                    break;
                }
            } if (combinations > 0){
                break;
        }
} if (combinations > 0){
    break;
}
    } if (!combinationFound) {
        console.log("Nothing found");
    }
}


sumAndProduct(["123"])







