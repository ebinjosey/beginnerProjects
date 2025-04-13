class Colour {
    constructor(hex, element) {
        this.hex = hex;
        this.element = element;
        this.locked = false;
    }

    setHex(hex) {
        this.hex = hex;
        this.element.style.backgroundColor= hex;
        this.element.querySelector('.colour-input').value = hex;
    }
}
