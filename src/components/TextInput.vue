<template>
  <div>
    <v-text-field
      v-model="inputValue"
      @input="sendInputValue"
      @change="sendRef"
      :label="attr.label"
      :data-testid="`input-${attr.name}`"
      :value="attr.value"
      :name="attr.name"
      :ref="attr.name"
      :required="attr.required"
    ></v-text-field>
  </div>
</template>

<script>
import utility from "../mixins/utility";

export default {
  mixins: [utility],
};
</script>

<style>
</style>