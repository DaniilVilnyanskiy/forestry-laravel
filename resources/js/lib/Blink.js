export class Blink {
    constructor() {
        this.handleClick = this.handleClick.bind(this);
        this.selectors = {
            btn: 'data-blink-btn-link',
            element: 'data-blink-element'
        }
    }

    init() {
        document.addEventListener('click', this.handleClick);
    }

    handleClick(event) {
        const { target } = event;

        const btnLink = target.closest(`[${this.selectors.btn}]`);
        if (btnLink) {
            const btnLinkValue = btnLink.dataset.blinkBtnLink;
            this.displayChangeElement(btnLinkValue);
        }

        const element = target.closest(`[${this.selectors.element}]`);
        if (!btnLink && !element) {
            this.hideOneElement();
        }
    }

    displayChangeElement(btnLinkValue) {
        const element = document.querySelector(`[${this.selectors.element}="${btnLinkValue}"]`);
        if (element && element.classList.contains('active')) {
            element.classList.remove('active');
        } else if (element && !element.classList.contains('active')) {
            this.hideOneElement();
            element.classList.add('active');
        }
    }

    hideOneElement() {
        const activeElement = document.querySelector('[data-blink-element].active');
        if (activeElement) activeElement.classList.remove('active');
    }
}
