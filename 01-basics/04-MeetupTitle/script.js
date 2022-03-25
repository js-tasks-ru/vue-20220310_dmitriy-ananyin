import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const fetchMeetupById = async (meetupId) => {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
};

createApp({
  name: 'App',
  data() {
    return {
      picked: 1,
      title: '',
    };
  },
  watch: {
    picked: {
      async handler(n = 1) {
        const data = await fetchMeetupById(n);
        this.title = data.title;
      },
      immediate: true,
    },
  },
}).mount('#app');

// Требуется создать Vue приложение
