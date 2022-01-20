<template>
  <v-select
    :label="attr.label"
    :data-testid="`input-${attr.name}`"
    :value="attr.value"
    :name="attr.name"
    :ref="attr.ref"
    :required="attr.required"
    :items="attr.options"
    item-text="title"
  >
  </v-select>
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