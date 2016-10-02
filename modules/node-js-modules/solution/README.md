# Ćwiczenia z tworzenia i wykorzystywania modułow w node.js

## Zadanie
Stwórz prosty web serwer w node.js który po wysłaniu requesta z `name` i `age` w parametrach zwróci w odpowiedzi:

`Hello [name]! You are [yourAge]`

Gdzie `yourAge` = `young` jeśli `age` < `50` albo `old` jeśli `age` >= `50`

Stwórz osobne moduły dla:
* sprawdzanie wieku
* budowania stringa z odpowiedzią
* handlowania requestów

## Podpowiedzi

### Stwórz prosty webserver nasłuchujący na portcie `5000`
* `http` to core module node.js
* `http` ma metode `createServer()` która zwraca nową instancję `http.Server`
* metoda `createServer()` przyjmuje jako argument funkcję typu `requestListener`
* funkcja request listener przyjmuje dwa argumenty `request` i `response`
* obiekt `Response` posada metodę `end()`, która kończy połączenie
* string przekazany do metody `end()` zostanie zwrócony w body response'a
* `http.Server` posiada metodę `listen()`, która przyjmuje dwa argumenty
  * `port` na którym server ma nasłuchiwać
  *  `cb` funkcję która będzie wywołana po wystartowaniu serwera
* po wystartowaniu serwera zaloguj do konsoli na jakim porcie nasłuchuje 
### Start serwera
* `node server.js` z konsoli 
*  `localhost:5000`  z przeglądarki
* dodaj do URLa dwa parametry `name` i `age`
### Z poziomu `requestListener` odczytaj przekazane parametry
* skorzystaj z core'owego modułu `url`
* `url` ma metodę `parse` [docs](https://nodejs.org/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost)

 