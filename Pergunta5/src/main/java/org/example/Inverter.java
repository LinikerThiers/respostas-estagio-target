package org.example;

// Escreva um programa que inverta os caracteres de um string. 

// IMPORTANTE: 
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
// b) Evite usar funções prontas, como, por exemplo, reverse; 

public class Inverter {
    public static String inverterString(String str) {
        StringBuilder resultado = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) {
            resultado.append(str.charAt(i));
        }
        return resultado.toString();
    }
}
