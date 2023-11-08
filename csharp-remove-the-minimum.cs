using System;
using System.Collections.Generic;
using System.Linq;

public class Remover
{
    public static List<int> RemoveSmallest(List<int> numbers)
    {
        if (numbers.Count == 0)
        {
            return numbers;
        }
        int minNumber = numbers.Min();
        numbers.Remove(minNumber);
        return numbers;
    }
}