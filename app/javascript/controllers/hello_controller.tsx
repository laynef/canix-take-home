import { Controller } from "@hotwired/stimulus"

export default class extends Controller<HTMLFormElement> {
  connect() {
    this.element.textContent = "Hello World!"
  }
}
