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

    setLocked (Locked) {
        this.locked = Locked;

        if (Locked) {
            this.element.classList.add('locked');
            this.element.querySelector('img').src = 'icons/lock-closed.png'
        }
        else {
            this.element.classList.remove('locked');
            this.element.querySelector('img').src = 'icons/lock-open.png'
        }
    }
}
