package factoryDesignPattern;


public class Bike implements Vehicle {

    @Override
    public void move() {
        System.out.println("Bike is zipping through traffic");
    }
}
