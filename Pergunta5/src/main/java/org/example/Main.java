package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Informe a string a ser invertida:");
        String entrada = scanner.nextLine();

        String invertida = Inverter.inverterString(entrada);
        System.out.println("String invertida: " + invertida);

        scanner.close();
    }
}