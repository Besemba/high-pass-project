import JustValidate from 'just-validate';

const validationMailing = new JustValidate('.mailing-form', {
  errorLabelCssClass: 'mailing-form__error',
  errorLabelStyle: {
    color: '#f06666',
  },
  focusInvalidField: true,
  lockForm: true,
});
validationMailing
  .addField('.mailing-form__input', [
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);

const validationContacts = new JustValidate('.contacts-form', {
  errorLabelCssClass: 'contacts-form__error',
  errorLabelStyle: {
    color: '#f06666',
  },
  focusInvalidField: true,
  lockForm: true,
});
validationContacts
  .addField('.contacts-form-name', [
    {
      rule: 'customRegexp',
      value: /^[a-zA-Zа-яА-ЯеЁ]*$/,
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('.contacts-form-email', [
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ])