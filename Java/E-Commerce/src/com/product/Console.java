package com.product;

import java.util.Scanner;

public class Console {

    private static Scanner sc = new Scanner(System.in);
    public static void readInput(){
        ProductFilter pf = new ProductFilter();
        System.out.println("****************Welcome To Flipkart****************");
        while (true){
            System.out.println("//////////////////////////////////////////////////////////////");
            System.out.println("Please select the Category: ");
            System.out.println("1.All");
            System.out.println("2.Mobiles");
            System.out.println("3.Laptops");
            System.out.println("4.Watches");
            System.out.println("5.Cosmetics");
            System.out.println("6.Exit");
            int choice = sc.nextInt();
            switch(choice){
                case 1:pf.displayAll();
                break;

                case 2:pf.displayCategory(Category.MOBILES);
                break;
                case 3:pf.displayCategory(Category.LAPTOPS);
                break;
                case 4:pf.displayCategory(Category.WATCHES);
                break;
                case 5:pf.displayCategory(Category.COSMETICS);
                break;
                case 6:System.exit(0);
                break;
            }
        }
    }
}
