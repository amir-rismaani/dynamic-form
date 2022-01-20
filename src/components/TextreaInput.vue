<template>
  <div class="solo">
    <v-textarea
      :data-testid="`input-${attr.name}`"
      :name="attr.name"
      :label="attr.label"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    attr: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
</style>