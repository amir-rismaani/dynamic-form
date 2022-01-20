<template>
  <v-text-field
    :label="attr.label"
    :data-testid="`input-${attr.name}`"
    :value="attr.value"
    :name="attr.name"
    :ref="attr.ref"
    :required="attr.required"
  ></v-text-field>
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