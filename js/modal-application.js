const modalApplication = document.querySelector('.application');

document.querySelectorAll('.application__btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.add('overflow');
        modalApplication.classList.add('modal--active');
    })
})

document.querySelector('.modal__close-btn').addEventListener('click', () => {
    modalApplication.querySelector('.modal__form').reset();
    document.body.classList.remove('overflow');
    modalApplication.classList.remove('modal--active');
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
            errorMessage: 'Введите номер телефона'
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
            errorMessage: 'Номер указан некорректно'
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