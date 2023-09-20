<template>
  <div class="landing-page">
    <div class="landing-page__2">
      <div class="landing-page__2--child-1">
        <div class="landing-page__2--child-1__circle-1">
          <div class="landing-page__2--child-1__circle-2"></div>
        </div>
      </div>
      <div class="landing-page__2--child-2">
        <p class="text__landing-page--title">Hi, I'm Andreas</p>
      </div>
      <div class="landing-page__2--child-3">
        <span class="text__landing-page--subtitle"
          >Front-End | Back-End | Full-Stack Developer</span
        >
      </div>
      <div class="landing-page__2--child-4">
        <span class="text__landing-page--headline"
          >Developing Website <br />
          on Your Own Design</span
        >
      </div>
      <div class="landing-page__2--child-5">
        <div>
          <a
            elevation="0"
            class="text__landing-page--button"
            href="https://drive.google.com/uc?export=download&id=1tACJeoZE7W79VXY-2i1jhgZ3S6wDMrjj"
            target="_blank"
          >
            Download CV Here
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  methods: {
    downloadCV() {
      console.log("test");
    },
  },
};
</script>
