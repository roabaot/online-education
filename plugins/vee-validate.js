import { extend } from 'vee-validate'

import { required, max, min, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'the {_field_} is required'
})

extend('max', {
  ...max,
  message: 'the {_field_} can\'t be more than {length}'
})

extend('min', {
  ...min,
  message: 'the {_field_} can\'t be small than {length}'
})

extend('email', {
  ...email,
  message: 'that not corecct email'
})
