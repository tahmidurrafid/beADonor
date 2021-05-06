package com.beadonor.beadonor.controller;

public class A {
    public String name;
    public int age;
    A(String name, int age){
        this.name = name;
        this.age = age;
    }

    public String getName(){
        return name;
    }

    @Override
    public String toString() {
        return name;
    }
    
}
