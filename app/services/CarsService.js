import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { saveState } from "../utils/Store.js";

function _saveCars() {
  // saveState('bananas', AppState.cars)
  saveState('cars', AppState.cars)
}

class CarsService {
  createCar(carData) {
    const newCar = new Car(carData)
    console.log('new car!', newCar);
    AppState.cars.push(newCar)
    _saveCars()
  }
  removeCar(carId) {
    const cars = AppState.cars
    const carIndex = cars.findIndex(car => car.id == carId)

    if (carIndex == -1) {
      throw new Error(`Could not find a car index with this ID: ${carId}`)
    }
    cars.splice(carIndex, 1)
    _saveCars()

    AppState.emit('cars')
  }
}

export const carsService = new CarsService()