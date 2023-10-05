import { generateId } from "../utils/GenerateId.js"

export class Car {
  constructor (year, make, model, mileage, runs, imgUrl, isNew, price, color, description, listedAt) {
    this.id = generateId()
    this.make = make
    this.model = model
    this.year = year
    this.mileage = mileage
    this.runs = runs
    this.imgUrl = imgUrl
    this.isNew = isNew
    this.price = price
    this.color = color
    this.description = description
    this.listedAt = listedAt ? new Date(listedAt).toLocaleString() : new Date().toLocaleString()
  }

  get CarCard() {
    return `
    <div class="col-10 mb-3">
      <div class="d-flex shadow car-border" style="border-color: ${this.color};">
        <img class="car-img"
          src="${this.imgUrl}"
          alt="${this.make} ${this.model}">
        <div class="p-3 w-100">
          <h2>${this.ComputeIsNewIcon}  ${this.year} ${this.make} ${this.model}</h2>
          <p>${this.listedAt}</p>
          <h3>${this.mileage} miles</h3>
          <h3>$${this.price}</h3>
          <h3>${this.runs ? 'It runs' : "It doesn't run"}</h3>
          <p>${this.description}</p>
          <div class="text-end">
            <button onclick="app.CarsController.removeCar('${this.id}')" class="btn btn-danger">Delete Car</button>
          </div>
        </div>
      </div>
    `
  }

  get ComputeIsNewIcon() {
    if (this.isNew) {
      return '<i class="mdi mdi-shimmer"></i>'
    }

    return ''
  }

}

