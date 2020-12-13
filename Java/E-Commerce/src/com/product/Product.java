package com.product;

public class Product {


    private String name;
    private String brand;
    private double price;
    private float rating;


    private Category category;

public Product(){}

    public Product(String name,String brand, double price,float rating,Category category){
        setName(name);
        setBrand(brand);
        setPrice(price);
        setRating(rating);
        setCategory(category);
    }



    public String getName() {
        return name;
    }

    private void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    private void setBrand(String brand) {
        this.brand = brand;
    }

    public double getPrice() {
        return price;
    }

    private void setPrice(double price) {
        this.price = price;
    }

    public float getRating() {
        return rating;
    }

    private void setRating(float rating) {
        this.rating = rating;
    }

    public Category getCategory() {
        return category;
    }

    private void setCategory(Category category) {
        this.category = category;
    }
}
