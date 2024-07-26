import Vue from 'vue'
import {
  extend,
  localize,
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

// Register the rules globally
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

// Set the default locale
localize('en', {
  messages: {
    required: 'This field is required',
    min: 'This field must have at least {length} characters',
    confirmed: 'The password confirmation does not match',
    mobileNum: 'Please enter a valid number',
  },
})
// Register VeeValidate components globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
