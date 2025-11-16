import java.util.Scanner;

public class TaskA {

    private static int getUserInput(Scanner sc) {
        int number;
        while (true) {
            if (!sc.hasNextInt()) {
                System.out.println("No integer input");
                sc.next(); // clear invalid input
            } else {
                number = sc.nextInt();
                if (number < 1) {
                    System.out.print("Number should be positive integer. Enter again:");
                } else {
                    return number; // valid input received
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of test cases:");
        int t = getUserInput(sc);

        for (int i = 0; i < t; i++) {
            System.out.print("Enter x:");
            int x = getUserInput(sc);
            System.out.print("Enter n:");
            int n = getUserInput(sc);
            // From the sequence x,-x,x,-x,x when n = 5, the result is x if n is odd else 0
            int result = (n % 2 == 1) ? x : 0;

            System.out.println(result);
        }

    }
}