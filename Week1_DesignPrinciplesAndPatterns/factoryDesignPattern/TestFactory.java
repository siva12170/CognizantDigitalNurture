package factoryDesignPattern;



public class TestFactory {

    public static void main(String[] args) {
        VehicleFactory factory = new VehicleFactory();

        Vehicle v1 = factory.getVehicle("car");
        v1.move();

        Vehicle v2 = factory.getVehicle("bike");
        v2.move();
    }
}

