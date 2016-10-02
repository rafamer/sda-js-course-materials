/**
 * Stwórz reużywalny modul do trackingu.
 *
 * Wymagania:
 * - w całej aplikacji może zostać dodana tylko jedna globalna zmienna
 * - modul musi być reużywalny w innej części aplikacji poza script.js
 * - modul ma tylko jedną publiczą metodę
 * - publiczna metoda przyjmuje 4 argumenty
 *     - categorię {String} - nie może być pusty
 *     - akcję {String} rodzaj eventu
 *     - label {String} - nie może być pusty
 * - jeśli przekazane argumenty są poprawne publiczna metoda wywułuje funkcję gaTack
 * - dostępne akcje: CLICK, HOVER, CHANGE, FOCUS, BLUR, SUBMIT
 * - funkcja gaTrack musi dostać akcje pisaną allCapsem
 * - wewnątz modulu można odwoływać się tylko do lokalnych zmiennych
 */
