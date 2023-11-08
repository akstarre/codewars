using System;

class Arge
{

    public static int NbYear(int p0, double percent, int aug, int p)
    {
        int years = 0;
        double population = p0;
        while (population < p)
        {
            population = population + population * (percent / 100) + aug;
            population = Math.Floor(population); // Ensure the population is a whole number
            years++;
        }
        return years;
    }
}