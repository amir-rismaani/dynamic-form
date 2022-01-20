<template>
  <v-row justify="center">
    <v-col cols="4" class="form-item" :data-test-id="`form-item-${field.name}`">
      <component :is="fieldType" :attr="field" />

      <!-- <text-input v-if="field.type === 'text'"  />
      <Dropdown v-if="field.type === 'dropdown'" :attr="field" /> -->
    </v-col>
  </v-row>
</template>

<script>
import FormType from "../constants/FormType";
import TextInput from "./TextInput.vue";
import Dropdown from "./Dropdown.vue";
import TextareaInput from "./TextreaInput.vue";
import Checkbox from "./Checkbox.vue";
import City from "./City.vue";
export default {
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  components: { TextInput, Dropdown, Checkbox, TextareaInput, City },
  data() {
    return {
      formType: FormType,
    };
  },
  computed: {
    fieldType() {
      let type = this.field.type;
      switch (type) {
        case "text":
          type = "text-input";
          break;
        case "textarea":
          type = "textarea-input";
          break;
      }
      return type;
    },
  },
};
</script>

<style lang="sass">
.v-label
  right: 0 !important
  left: auto !important
</style>
