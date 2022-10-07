/*
* 약수의 개수와 덧셈
*/

// function solution(left, right) {
//     var answer = 0;

//     for (var i = left; i <= right; i++) {
//         var count = 0
//         for(var j = 1; j <= i; j++){
//             if((i % j) == 0){
//                 count++;
//             }
//         }
        
//         if(count & 1){
//             answer -= i 
//         }else{
//             answer += i
//         }
//     }

//     return answer;
// }

function solution(left, right){
    var answer = 0

    for(var i = left; i <= right; i++){
        if(i % Math.sqrt(i) === 0){
            answer -= i;    
        }else{
            answer += i;
        }        
    }

    return answer
}

console.log(solution(13,17));