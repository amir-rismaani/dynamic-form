<template>
  <v-checkbox
    v-model="inputValue"
    @change="chageItem"
    :label="attr.label"
    :data-testid="`input-${attr.name}`"
    :value="attr.value"
    :name="attr.name"
    :ref="attr.name"
    :required="isRequired"
    :rules="getRule"
  ></v-checkbox>
</template>

<script>
import utility from "../mixins/utility";
export default {
  mixins: [utility],
};
</script>

<style>
</style>