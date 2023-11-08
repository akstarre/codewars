//Combine two strings and output sorted string with no duplicates. 
using System;
using NUnit.Framework;

public class TwoToOne
{

    public static string Longest(string s1, string s2)
    {
        var result = "";
        foreach (char c in s1)
        {
            if (!result.Contains(c))
            {
                result += c;
            }
        }
        foreach (char c in s2)
        {
            if (!result.Contains(c))
            {
                result += c;
            }
        }
        char[] charArray = result.ToCharArray();
        Array.Sort(charArray);
        string resultString = new string(charArray);
        return resultString;
    }
}