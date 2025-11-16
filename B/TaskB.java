import java.util.Scanner;

public class TaskB {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t > 0) {
            --t;
            long n = sc.nextLong();

            // impossible if n is odd or less than 4
            if (n % 2 == 1 || n < 4) {
                System.out.println("-1");
                continue;
            }

            // maximum crafts (use all type A = 4 units)
            long maxCrafts = n / 4;

            // minimum crafts (start with all type B = 6 units)
            long b = n / 6; // max possible B crafts
            long minCrafts = -1;

            // Checking at most 2 or 3 possibilities to find a solution
            // as 2 type B crafts can be replaced by 3 type A crafts
            for (long i = b; i >= Math.max(0, b - 2); i--) {
                long remaining = n - 6 * i;
                if (remaining >= 0 && remaining % 4 == 0) {
                    minCrafts = i + remaining / 4;
                    break;
                }
            }

            if (minCrafts == -1)
                System.out.println("-1");
            else
                System.out.println(minCrafts + " " + maxCrafts);
        }

        sc.close();
    }
}
