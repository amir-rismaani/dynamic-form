<template>
  <v-checkbox
    :label="attr.label"
    :data-testid="`input-${attr.name}`"
    :value="attr.value"
    :name="attr.name"
    :ref="attr.ref"
    :required="attr.required"
  ></v-checkbox>
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