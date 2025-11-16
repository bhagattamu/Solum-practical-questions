import java.util.Scanner;

public class TaskA {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        for (int i = 0; i < t; i++) {
            long x = sc.nextLong();
            long n = sc.nextLong();
            // From the sequence x,-x,x,-x,x when n = 5, the result is x if n is odd else 0
            long result = (n % 2 == 1) ? x : 0;
            System.out.println(result);
        }

        sc.close();

    }
}