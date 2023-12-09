package SnVP.Part1;
import SnVP.Part1.SingleObject;
public class SingletonPatternDemo {
    public static void main(String[] args){
        SingleObject object = SingleObject.getInstance();
        object.showMessage();
    }
}
