import { defineComponent } from './vendor/vue.esm-browser.js';

import MeetupView from './MeetupView.js';

import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
// import { resolve } from 'core-js/fn/promise';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetupData: null,
      error: null,
    };
  },

  watch: {
    meetupId: {
      handler() {
        this.meetup();
      },
      immediate: true,
    },
  },

  methods: {
    async meetup() {
      this.meetupData = null;
      this.error = null;
      try {
        const response = await fetchMeetupById(this.meetupId);
        // console.log(reject);
        this.meetupData = response;
      } catch (e) {
        this.error = e.message;
      }
    },
  },

  template: `
    <div class="page-meetup">
    <meetup-view v-if="meetupData" :meetup="meetupData"/> 
      <ui-container v-else-if="!error">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else>
        <ui-alert>{{error}}</ui-alert>
      </ui-container>
    </div>`,
});
