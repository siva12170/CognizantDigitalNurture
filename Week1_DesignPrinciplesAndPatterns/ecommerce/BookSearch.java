package ecommerce;

import java.util.Scanner;

public class BookSearch {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String[] books = {
            "The Alchemist", "1984", "Sapiens", "To Kill a Mockingbird", "The Great Gatsby",
            "Atomic Habits", "Moby Dick", "Pride and Prejudice", "The Hobbit", "Hamlet"
        };

        System.out.println("Welcome to the Online Bookstore!");
        System.out.println("Type the book title to check availability or 'exit' to leave.");

        while (true) {
            System.out.print("\nEnter book title: ");
            String title = input.nextLine();

            if (title.equalsIgnoreCase("exit")) {
                System.out.println("Thank you for visiting!");
                break;
            }

            boolean exists = false;
            for (String book : books) {
                if (book.equalsIgnoreCase(title)) {
                    exists = true;
                    break;
                }
            }

            if (exists) {
                System.out.println(title + " is available in our catalog.");
            } else {
                System.out.println(title + " is currently unavailable.");
            }
        }

        input.close();
    }
}
