<template>
  <v-textarea
    v-if="display"
    v-model="inputValue"
    @input="sendInputValue"
    @change="sendRef"
    :name="attr.name"
    :label="attr.label"
    :ref="attr.name"
    :required="isRequired"
    :rules="getRule"
  ></v-textarea>
</template>

<script>
import utility from "../mixins/utility";

export default {
  mixins: [utility],
};
</script>

<style>
</style>