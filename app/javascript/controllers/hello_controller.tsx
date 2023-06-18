import { Controller } from "@hotwired/stimulus"

export default class extends Controller<HTMLElement> {
  connect() {
    this.element.textContent = "Hello World!"
  }
}
