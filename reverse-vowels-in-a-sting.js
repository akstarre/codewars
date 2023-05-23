// DESCRIPTION:
// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

// SOLUTION
    function isVowel(c) {
        return (c == 'a' || c == 'A' || c == 'e'
                || c == 'E' || c == 'i' || c == 'I'
                || c == 'o' || c == 'O' || c == 'u'
                || c == 'U');
    }
   
    // Function to reverse order of vowels
    function reverseVowel(str1) {
        let j = 0;
        let str = str1.split('');
        let vowel = "";
        for (let i = 0; i < str.length; i++) {
            if (isVowel(str[i])) {
                j++;
                vowel += str[i];
            }
        }
   
        for (let i = 0; i < str.length; i++) {
            if (isVowel(str[i])) {
                str[i] = vowel[--j];
            }
        }
   
        return str.join("");
    }
     
    let str = "hello world";
   console.log(reverseVowel(str))