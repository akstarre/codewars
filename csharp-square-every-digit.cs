//square every digit in an int and return the new concatonated int. 
using System;
using System.Linq;

public class Kata
{
    public static int SquareDigits(int n)
    {
        string result = "";
        int[] digits = n.ToString().Select(n => int.Parse(n.ToString())).ToArray();
        foreach (int i in digits)
        {
            int squared = (int)Math.Pow(i, 2);
            result += squared.ToString();
        }
        return int.Parse(result);
    }
}