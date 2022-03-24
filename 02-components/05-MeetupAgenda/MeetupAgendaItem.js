import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  // data() {
  //   return {
  //     image: this.getStringFromTypeObject(agendaItemIcons),
  //     // image: agendaItemIcons[this.agendaItem.type] ?? agendaItemIcons['other'],
  //     defaultTitle: this.getStringFromTypeObject(agendaItemDefaultTitles),
  //     // defaultTitle: agendaItemDefaultTitles[this.agendaItem.title] ?? agendaItemDefaultTitles[this.agendaItem.title],
  //   };
  // },

  // methods: {
  //   getStringFromTypeObject(object) {
  //     const objectArr = Object.entries(object);
  //     const objectStr = objectArr.filter((item) => item[0] === this.agendaItem.type && item[1]);

  //     return objectStr[0][1];
  //   },
  // },

  computed: {
    title() {
      return this.agendaItem.title ?? agendaItemDefaultTitles[this.agendaItem.type];
    },

    icon() {
      return agendaItemIcons[this.agendaItem.type];
    },

    iconSrc() {
      return `/assets/icons/icon-${this.icon}.svg`;
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="iconSrc" class="icon" :alt="icon" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ title }}</h3>
        <p v-if="agendaItem.speaker" class="agenda-item__talk">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,
});
