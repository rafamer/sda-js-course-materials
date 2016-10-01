#Tworzenie obiektów i dziedziczenie

Poniższe schematy zapisz w formie dziedziczących po sobie obiektów na dwa sposoby:
* z wykorzystaniem `Object.create`
* przy użyciu konstruktorów

**Vehicle**
* `name {String}`
* `numberOfGears {Number}`
* `currentGear {Number}`
* `startEngine()` logs `Engine Started` to console
* `stopEngine()` logs `Engine Started` to console
* `drive()` logs `Vehicle of given name is driving with current gear` to console _engine must be on and gear must be set_

**Car**
* `prototype` = `Vehicle`
* `brand {String}`
* `numberOfSeats {Number}`
* `getFullName()` returns `brand` and `name`
* `addPassenger()` should `throw` error if current number of passengers is greater than `numberOfSeats`
* `removePassenger()` after removing passenger returns current number of passengers
* `gearUp()`
* `geatDown()`

**SportCar**
* `prototype` = `Car`
* `numberOfSeats = 2`
* `hasNitro {Boolean}`
* `speedUp()` reduces `currentCear` by two and uses 1/4 of `nitro`. If `nitro` is zero throws error 
* `drive()` logs `SportCar of given fullName is driving with current gear nitro level and number of passengers`
