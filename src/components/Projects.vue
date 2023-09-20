<template>
  <div class="projects-container">
    <div class="projects-container__1">
      <p class="text__header--title-medium">Projects</p>
    </div>
    <div class="projects-container__2">
      <div class="projects-container__2--1">
        <div
          :class="`projects-container__2--images__${carousel[index].id}`"
        ></div>
      </div>
      <div class="projects-container__2--2 text__projects--title">
        {{ carousel[index].title }}
      </div>
      <div class="projects-container__2--3 text__projects--content">
        {{ carousel[index].desc }}
      </div>
      <div class="projects-container__2--4">
        <div>
          <a
            elevation="0"
            class="text__projects--button"
            :href="`${carousel[index].link}`"
            v-if="showButton"
            target="_blank"
          >
            Project Link &rarr;</a
          >
        </div>
      </div>
    </div>
    <div class="projects-container__3">
      <div @click="changeSlide('previous')" class="projects-button">
        <span class="material-symbols-outlined"> chevron_left </span>
      </div>
    </div>
    <div class="projects-container__4">
      <div @click="changeSlide('next')" class="projects-button">
        <span class="material-symbols-outlined"> chevron_right </span>
      </div>
    </div>
    <div class="projects-container__5">
      <div v-for="index_carousel in carousel" :key="index_carousel.id">
        <div
          class="projects-container__5--active"
          v-if="index_carousel.id === index"
        ></div>
        <div
          class="projects-container__5--non-active"
          v-else
          @click="changeSlide(index_carousel.id)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  components: {},
  data() {
    return {
      index: 0,
      carousel: [
        {
          id: 0,
          title: "Kost Catleya",
          desc: "Website intended for Catleya Boarding House with a purpose to develops the boarding house. Booking can be made by customer to makes it easy on booking room. Manage the data required in the management of boarding house, such as room data to edit whether it fills or not. Transaction, the manager can fill transaction in and out, completed with graph, reports that can be download.",
          link: "https://kost-catleya.andreas-r.space",
        },
        {
          id: 1,
          title: "E-Arsip [Project during Internship]",
          desc: "Managing archives in form digital or physical. It has plenty features: Storing and managing archives whether on rack or bin. Upload document template from physical document also with variables. Create template using What You See is What You Get complete with document name and variables. Create archive/document easily from templates that was made before. Print and email document easily.",
          link: "https://e-arsip.andreas-r.space",
        },
        {
          id: 2,
          title: "Warehouse Management System [Project during Internship]",
          desc: "Managing warehouses and has plenty features: Managing products stored on warehouses. Managing documents related to products, warehouses, shipping, etc. Tracking shipment using document number. Emailing related to document and product",
          link: "#",
        },
        {
          id: 3,
          title: "Atma Jogja Rental",
          desc: "Booking and Manage Car Rental project given by college. It solving many issues base on Customer and Manger such as booking cars, managing employees shift and schedule, company partner cars, booking promos, payment verification, print reports, and many more.",
          link: "https://atmarental.andreas-r.space",
        },
        {
          id: 4,
          title: "Weather Whisper",
          desc: "Self Project about weather application offers a wealth of features to ensure you're always informed and prepared. It has some features: Search Location: Whether you're planning a trip, or just curious about the weather halfway around the world, 5-Day Wind Forecast: For those who rely on wind conditions for outdoor activities, Current Location, Current Location silent guide by automatically detecting your current location, and display wind, humidity, and further information.",
          link: "https://weather-whisper.andreas-r.space",
        },
      ],
      showButton: true,
    };
  },
  watch: {
    index(newVal, oldVal) {
      if (newVal) {
        if (newVal != oldVal) {
          if (newVal == 2) {
            this.showButton = false;
          } else {
            this.showButton = true;
          }
        }
      }
    },
  },
  methods: {
    changeSlide(props) {
      if (props == "next") {
        if (this.index < 4 && this.index >= 0) {
          this.index++;
        } else {
          this.index = 0;
        }
      }
      if (props == "previous") {
        if (this.index == 0) {
          this.index = 4;
        } else {
          this.index--;
        }
      }
      if (props >= 0 && props < 5) {
        this.index = props;
      }
    },
  },
};
</script>
