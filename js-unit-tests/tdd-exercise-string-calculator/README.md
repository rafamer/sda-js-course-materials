# TDD w praktyce - string calculator

Przetłumaczona na język polski tdd kata autorstwa Roy'a Osherove'a. Oryginał dostępny [tutaj](http://osherove.com/tdd-kata-1/)

Uzywamy [jasmine.js](http://jasmine.github.io/) oraz [testem.js](https://github.com/testem/testem) jako runner.

## Setup
- otwórz ten folder w terminalu
- odpal komendę `npm install` aby zainstalować wymagane biblioteki
- odpal komendę `npm test` aby uruchomić testem.js w trybie TDD
- Testy umieść w pliku `script_spec.js`
- Logikę umieść w pliku `script.js`
- dokumentacja jasmine API dostepna [tutaj](http://jasmine.github.io/2.5/introduction.html)

## Zanim zaczniesz:
- nie czytaj całego opisu
- Skup się tylko na jednym zadaniu na raz
- Testuj tylko poprawne w wartości przekazane do funkcji 

## Instrukcję do zadania:
1. Stwórz prosty kalkulator stringów - funkcję `add(str)` która:
1.1 przyjmuje 0, 1 lub dwie liczby naturalne i zwraca ich sumę. Np. dla `'1,2'` zwraca `3` dla `'4'` zwraca 4 dla `''` zwaraca 0
1.2 zacznij pisać testy od pustego stringa i stopniowo przechodź do opcji z jedną a następnie dwiema liczbami w stringu
1.3 Kod powinnien być jak najprostszy
1.4 Pamiętaj o refactoringu zarówno logiki jak i testów za każdym razem gdy cośzmieniasz
2. Funkcja `add(str)` może przyjąc dowolną ilość liczb w stringu np. `'3,5,7,11,34...'` 
3. Dodaj `\n` jak opcjonalny delimeter
3.1 to jest poprawny input: `'1\n2,3'` wynik `6`
3.2 to jest niepoprawny input `'1,\n'`
4. Dodaj możliwość wprowadzenia własnego delimitera
4.1 Input przyjmuje następujący format `'//[delimiter]\n[numbers…]'` np. `'//;\n1;2'` delimeter to `;` a suma to `3` 
4.2 Pierwsza linia z deklaracją delimitera jest opcjonalna, wszystkie wcześiejsze testy powinny działać zarówno z własnym delimiteram jak i bez niego
5. Przekazanie w stringu liczb ujemnych rzuca wyjątek `negatives not allowed` oraz wszystkie ujemne liczby przekazane w stringu


