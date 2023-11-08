using System;
public class Sum
{
    public int GetSum(int a, int b)
    {
        if (a == b)
        {
            return a;
        }
        else
        {
            var start = Math.Min(a, b);
            var end = Math.Max(a, b);
            var sum = 0;
            for (var i = start; i <= end; i++)
            {
                sum += i;
            }
            return sum;
        }
    }
}