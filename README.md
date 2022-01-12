# Moduł JavaScript

## Lekcja 4

### Zadanie 4 - poziom podstawowy

Stwórz funkcję `colorizeElement`, która będzie zmieniała stylowanie przekazanego w parametrze elementu. Funkcja może otrzymać dowolny element HTML w parametrze. Funkcja powinna dodawać do elementu klasę `new-class`, atrybut `data-tag` przechowujący nazwę tagu otrzymanego w parametrze, oraz powinna ustawić kolor tekstu w tym elemencie na `#f1f1f1` i wielkość czcionki na `12px`. Na koniec, funkcja powinna zwrócić (`return`) zmodyfikowany element.

W tym zadaniu musisz wykorzystać już wybrany dla Ciebie element (węzeł DOM), który funkcja ma otrzymać przekazany, jako parametr w inpucie. Nie ma wobec tego potrzeby robić samemu `document.querySelector("#test")`, wystarczy jedynie `(node) =>` -- i tutaj użycie node (pod którym kryje się `<div>`).

Przykładowy input:
`<div id="test"></div>`
`colorizeElement(document.querySelector('#test'));`

Przykładowy output:
Element `<div id="test" class="new-class" data-tag="div" style...></div>`
