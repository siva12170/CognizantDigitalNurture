package singletonPattern;


public class ConfigManager {

    private static ConfigManager instance;

    ConfigManager() {
        System.out.println("Initializing ConfigManager");
    }

    public static ConfigManager getInstance() {
        if (instance == null) {
            instance = new ConfigManager();
        }
        return instance;
    }

    public void display(String configMessage) {
        System.out.println("[CONFIG]: " + configMessage);
    }
}

