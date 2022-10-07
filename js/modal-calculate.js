const modalCalcuate = document.querySelector('.calculate-price');

document.querySelector('.calculate-price__btn').addEventListener('click', () => {
    document.body.classList.add('overflow');
    modalCalcuate.classList.add('modal--active');
})


document.querySelector('.modal__close-btn').addEventListener('click', () => {
    modalCalcuate.querySelector('.modal__form').reset();
    document.body.classList.remove('overflow');
    modalCalcuate.classList.remove('modal--active');
})

// validation

const validationModal = new JustValidate('.modal__form');
validationModal
    .addField('#modal-name', [
        {
            rule: 'required',
            errorMessage: 'Введите имя'
        },
        {
            rule: 'customRegexp',
            value: '^((?=.*[А-Я])||(?=.*[а-я]).{2,30})$',
            errorMessage: 'Недопустимый формат'
        },
    ])
    .addField('#modal-message', [
        {
            rule: 'required',
            errorMessage: 'Введите сообщение'
        }
    ])
    .addField('#modal-tel', [
        {
            rule: 'required',
            errorMessage: 'Номер указан некорректно'
        }
    ])
    .addField('#modal-tel', [
        {
            validator: (value) => {
                let phone;
                phoneField.forEach(field => {
                    phone = field.inputmask.unmaskedvalue();
                })
                return Number(phone) && phone.length === 10
            },
            errorMessage: 'Введите номер телефона'
        }
    ])
    .addField('#modal-email', [
        {
            rule: 'required',
            errorMessage: 'Введите e-mail'
        }
    ])
    .onSuccess((event) => {
        console.log("Отправка запроса");
        event.preventDefault();
        modalCalcuate.querySelector('.modal__form').reset();
    });