package financialForecasting;



import java.util.Scanner;

public class TemperatureTrend {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter number of days to analyze: ");
        int days = input.nextInt();

        int[] temperatures = new int[days];
        System.out.println("Enter temperatures for each day:");

        for (int i = 0; i < days; i++) {
            System.out.print("Day " + i + ": ");
            temperatures[i] = input.nextInt();
        }

        int minTemp = temperatures[0];
        int maxRise = 0;
        int coolDay = 0;
        int warmDay = 0;

        for (int i = 1; i < days; i++) {
            if (temperatures[i] < minTemp) {
                minTemp = temperatures[i];
                coolDay = i;
            }

            int rise = temperatures[i] - minTemp;
            if (rise > maxRise) {
                maxRise = rise;
                warmDay = i;
            }
        }

        if (maxRise > 0) {
            System.out.println("\nLowest temperature was on Day " + coolDay + " with " + temperatures[coolDay] + "°C");
            System.out.println("Highest rise reached on Day " + warmDay + " with " + temperatures[warmDay] + "°C");
            System.out.println("Maximum Temperature Rise = " + maxRise + "°C");
        } else {
            System.out.println("\nNo significant temperature rise observed.");
        }

        input.close();
    }
}
