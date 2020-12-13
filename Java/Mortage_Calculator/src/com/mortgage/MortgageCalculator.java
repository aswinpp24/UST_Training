package com.mortgage;

public class MortgageCalculator implements MortgageCalculation {
    private static final byte MONTHS_IN_YEAR = 12;
    private static final byte PERCENT = 100;

    private int principal;
    private float annualInterest;
    private byte years;

    public MortgageCalculator(int principal,float annualInterest,byte years){
        this.principal = principal;
        this.annualInterest = annualInterest;
        this.years = years;
    }

    @Override
    public double calculateBalance(
            short numberOfPaymentsMade
    ) {
        float monthlyInterest = getMonthlyInterest();
        int numberOfPayments = getNumberOfPayments();

        double balance = principal
                * (Math.pow(1 + monthlyInterest, numberOfPayments) - Math.pow(1 + monthlyInterest, numberOfPaymentsMade))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
        return balance;
    }



    @Override
    public double calculateMortgage() {
        float monthlyInterest = getMonthlyInterest();
        int numberOfPayments = getNumberOfPayments();
        double mortgage = principal
                * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
        return mortgage;
    }

    @Override
    public double[] getRemainingBalance(){
        var balance = new double[getNumberOfPayments()];
        for (short month = 1;month <= balance.length; month++){
            balance[month-1] = calculateBalance(month);
        }
        return balance;
    }

    private int getNumberOfPayments() {
        return years * MONTHS_IN_YEAR;
    }

    private float getMonthlyInterest() {
        return annualInterest / PERCENT / MONTHS_IN_YEAR;
    }
}
