import { Popup } from "./Popup";

class PopupWithForm extends Popup {
    constructor(popupSelector, { submitForm }) {
        super(popupSelector);
        this._handleFormSubmit = submitForm;
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
        this._submitButton = this._formElement.querySelector('.popup__button');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    setInputValues(element) {
        this._inputList.forEach((input) => {
            input.value = element[input.name]
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}

export { PopupWithForm };