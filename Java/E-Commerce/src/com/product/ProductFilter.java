package com.product;

import java.util.List;

public class ProductFilter extends Product implements ProductDisplay {

    public ProductFilter(){}
    public ProductFilter(String name, String brand, double price, float rating, Category category) {
        super(name, brand, price, rating, category);
    }

    private static List<Product> products = List.of(
       new Product("One Plus 8T","One Plus",30000,4.5f,Category.MOBILES),
            new Product("Oppo f20","Oppo",20000,3.0f,Category.MOBILES),
            new Product("HTC M8","HTC",15000,2.5f,Category.MOBILES),
            new Product("Macbook Pro","Apple",80000,5,Category.LAPTOPS),
            new Product("Asus Vivobook 14","Asus",40000,3,Category.LAPTOPS),
            new Product("MSI Alpha 15","MSI",60000,3.5f,Category.LAPTOPS),
            new Product("Fossil","Fossil",8000,4,Category.WATCHES),
            new Product("Fastrack","Fastrack",2000,2,Category.WATCHES),
            new Product("G-Shock","Casio",5000,3,Category.WATCHES),
            new Product("Fog Body Perfume","Fog",400,3,Category.COSMETICS),
            new Product("Vaseline Skin Lotion","Vaseline",200,4,Category.COSMETICS),
            new Product("Axe Body Perfume","Axe",100,5,Category.COSMETICS)

    );





    @Override
    public void displayAll(){
        products.stream()
                .forEach(p -> System.out.println("Name: " + p.getName() + "   Brand: " + p.getBrand() + "   Price: " + p.getPrice() + "   Rating: " + p.getRating()));
    }


    @Override
    public void displayCategory(Category category){
        products.stream()
                .filter(p -> p.getCategory() == category)
                .forEach(p -> System.out.println("Name: " + p.getName() + "   Brand: " + p.getBrand() + "   Price: " + p.getPrice() + "   Rating: " + p.getRating()));
    }



}
