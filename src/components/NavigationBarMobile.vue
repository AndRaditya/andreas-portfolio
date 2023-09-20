<template>
  <div :class="drawer ? 'navigation__mobile' : 'close--navigation__mobile'">
    <div class="navigation__mobile__child-1">
      <span class="text__header--subtitle text__header--subtitle--mobile">
        <a
          href="https://www.linkedin.com/in/andreas-raditya/"
          target="_blank"
          class="text__header--link"
          >LinkedIn</a
        >
      </span>
    </div>
    <div class="navigation__mobile__child-2">
      <span class="text__header--subtitle text__header--subtitle--mobile"
        ><a
          href="https://github.com/AndRaditya"
          target="_blank"
          class="text__header--link"
          >GitHub</a
        ></span
      >
    </div>
    <div class="navigation__mobile__child-3">
      <span class="text__header--subtitle text__header--subtitle--mobile">
        <a
          href="mailto:raditya.aryatama@gmail.com"
          class="text__header--link"
          target="_blank"
          >Email</a
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["drawer"],
};
</script>
