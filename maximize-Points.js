// RTCSessionDescriptionEach player has a certain power level. If a player has a higher power level than her opponent, she is guaranteed to win and her team would get 1 point for that win while the opponents get a 0.

// You are the coach of the first team and you know the power levels of all the players before the game starts. You want to rearrange the players in your team to earn the highest possible total score.

// Input/Output
// [input] integer array team1
// The power levels of the players in the first team. Teams have less than 100 players and each power level is less than 100.

// [input] integer array team2
// Array of the same length as team1, the power levels of the players of the second team.

// [output] an integer
// The maximum number of points the first team can get.

// Example
// For team1 = [3,2,4] and team2 = [1,2,3], the output should be 3.

// If you don't rearrange the players in the first team, it will get 2 points, since 3 > 1, 2 = 2 and 4 > 3.

// However, if you rearrange the order of the players to [2, 3, 4], the first team will get 3 points.

// SOLUTION
// function maximizePoints(team1, team2) {

//     let sort = team => team.slice().sort((a, b) => a - b)
//     ,   arr1 = sort(team1)
//     ,   arr2 = sort(team2)
//     ,   pnts = 0;
    
//     for (let i = 0, j = 0; i < arr1.length; i++) {
//       if (arr1[i] > arr2[j]) {
//         pnts++;
//         j++;
//       }
//     }
    
//     return pnts;
//   }