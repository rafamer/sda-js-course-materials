# jQuery plugins - zadania

## Najdłuższy element tekstowy
Napisz wtyczkę, która z kolekcji elementów zwróci ten, który ma najdłuższy tekst
```html
<p>asdasdasdasd</p>
<p>dsada</p>
<p>dasddasdd</p>
<p>asdasdasdasdasdasdadasd</p>
<p>ad</p>
```

```js
$('p').getTheLongestElement().text(); // asdasdasdasdasdasdadasd
```

## Tooltip plugin
Napisz wtuczkę, która przy hoverze będzie pokazywać tooltip po prawej stronie elementu.
W treści tooltipu ma się znajdować wartość atrybutu `data-tooltip` tego elementu.

```html
<a href="google.com" data-tooltip="Google">Click me!</a>
```

```js
$('a').myTooltip();
```

```
           __________
          |          |
Click me <   Google  |
          |__________| 

```

## Form validator
Napisz wtyczkę do walidacji formularzy.
Wymagania
- jeśli formularz się nie waliduje, submit jest wstrzymywany
- walidacji podlegają tylko inputy z atrybutem `data-validate="true"`
- walidator zwraca false dla pustych inputów
- dla inputów `type="email"` walidator sprawdza poprawny format adresu email
- inputy z błędami mająbyć zaznaczone czerwonym borderem
- pod inputem pojawia się informacja o błędzie
- walidacja odbywa się po klicknięciu przycisku submit

```html
<form>
  <input id="name" type="text" data-validate="true">
  <input id="email" type="email" data-validate="true">
  
  <button type="submit">Send</button>
</form>
```

```js
$('form').attachValidator();
```