package singletonPattern;



public class ConfigDemo {

    public static void main(String[] args) {

        ConfigManager c1 = ConfigManager.getInstance();
        c1.display("Loaded database config");

        ConfigManager c2 = ConfigManager.getInstance();
        c2.display("Updated cache settings");

        if (c1 == c2) {
            System.out.println("Single ConfigManager instance is being used.");
        } else {
            System.out.println("Multiple instances exist.");
        }
    }
}
