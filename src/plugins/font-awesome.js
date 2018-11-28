import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope)
library.add(faUser)
library.add(faFacebook)
library.add(faTwitter)
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
