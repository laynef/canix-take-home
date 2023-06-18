import { Controller } from "@hotwired/stimulus"

export default class extends Controller<HTMLFormElement> {
  private element: HTMLElement;

  connect() {
    this.element.textContent = "Hello World!"
  }
}
