package com.mortgage;

import java.text.NumberFormat;

public class MortgageReport implements MortgageReportDisplay {
    private final NumberFormat currency;
    private  MortgageCalculator calculator;

    public MortgageReport(MortgageCalculator calculator){
        this.calculator = calculator;
        currency = NumberFormat.getCurrencyInstance();
    }

    @Override
    public void printMortgage() {
        double mortgage = calculator.calculateMortgage();
        String mortgageFormatted = currency.format(mortgage);
        System.out.println();
        System.out.println("MORTGAGE");
        System.out.println("-------------------");
        System.out.println("Monthly Payments " + mortgageFormatted);
    }

    @Override
    public void printPaymentSchedule() {
        System.out.println();
        System.out.println("PAYMENT SCHEDULE");
        System.out.println("************************");
       for (double balance: calculator.getRemainingBalance())
           System.out.println(currency.format(balance));
    }
}
