# Preguntas de Sustentacion

## 1. ¿Qué ventaja tiene usar TypeScript y definir la clase Serie en lugar de usar objetos literales genéricos (any) como en JavaScript puro?

Usar TypeScript con una clase o tipo Serie aporta varias ventajas importantes:

Typescript permite crear datos de manera mas simple y concreta, evitando que se generen errores, y en caso de aparecer, estos pueden ser resueltos de forma rapida y sencilla.
Ademas, se pueden realizar cambios de codigo de forma mas .

## 2. En la función del promedio, ¿por qué es recomendable usar let para el acumulador y const para el arreglo de datos?


Ambos los valores constantes y let, permiten reducir errores lógicos, haciendo que el código sea más legible De igual forma, el acumulador debe ser let ya que este es variable.

## 3. ¿Qué pasaría en compilación si intentas asignar "cinco" al atributo seasons de una Serie en data.ts?

TypeScript devolveria un error inmediatamente. Esto es debido a que seasons está definido como number y "cinco" es una string.
