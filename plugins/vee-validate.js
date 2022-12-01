

import {  extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {...required, message: 'field required'});
extend('between', {
  params: ['min', 'max'],
  validate(value, { min, max }) {
    return value >= min && value <= max;
  },
  message: 'This field value must be between {min} and {max}'

})

// Vue.component(ValidationObserver, ValidationProvider)
