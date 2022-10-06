// validation

const validation = new JustValidate('.feedback__form');
validation
    .addField('#name', [
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
    .addField('#message', [
        {
            rule: 'required',
            errorMessage: 'Введите сообщение'
        }
    ])
    .addField('#phone', [
        {
            rule: 'required',
            errorMessage: 'Введите номер телефона'
        }
    ])
    .addField('#phone', [
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
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Введите e-mail'
        }
    ])
    .onSuccess((event) => {
        console.log("Отправка запроса");
        event.preventDefault();
    });