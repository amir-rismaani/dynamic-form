<template>
  <v-btn block color="primary" elevation="2" class="mt-8" @click="submit">{{
    label
  }}</v-btn>
</template>

<script>
import LabelTexts from "../constants/Labels";
export default {
  props: {
    label: {
      type: String,
      default: LabelTexts.Submit,
    },
  },
  methods: {
    submit() {
      this.$emit("onSubmit");
    },
  },
};
</script>

<style>
</style>