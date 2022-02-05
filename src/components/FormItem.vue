<template>
  <v-col class="form-item" :data-test-id="`form-item-${field.name}`">
    <component
      :is="fieldType"
      :attr="field"
      :ref="field.name"
      @inputValue="setData"
      @setRefs="handleRefs"
    />
  </v-col>
</template>

<script>
import { mapMutations } from "vuex";
import FormType from "../constants/FormType";
import TextInput from "./TextInput.vue";
import Dropdown from "./Dropdown.vue";
import TextareaInput from "./TextreaInput.vue";
import Checkbox from "./Checkbox.vue";
import City from "./City.vue";

import utility from "../mixins/utility";

export default {
  mixins: [utility],
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  components: { TextInput, Dropdown, Checkbox, TextareaInput, City },
  data() {
    return {
      formType: FormType,
    };
  },
  methods: {
    ...mapMutations(["setFormData"]),
    setData(value) {
      this.setFormData({ key: this.field.name, value });
    },
    handleRefs(refs) {
      for (const ref of refs) {
        if (ref._props.field.dependency) {
          this.dependencyChecker(refs, ref);
        }
      }
    },
    dependencyChecker(components, destinationRef) {
      const dependency = destinationRef._props.field.dependency;
      const destinationRefId = Object.entries(destinationRef.$refs)[0];
      if (dependency.show) {
        const dependentComponent = this.getComponentByRef(
          components,
          dependency.show.name
        );
        if (
          dependentComponent.$refs[dependency.show.name].inputValue ===
          dependency.show.value
        ) {
          destinationRefId[1].display = true;
        } else {
          destinationRefId[1].display = false;
        }
      }
      if (dependency.required) {
        const dependentComponent = this.getComponentByRef(
          components,
          dependency.required.name
        );
        if (
          dependentComponent.$refs[dependency.required.name].inputValue ===
          dependency.required.value
        ) {
          destinationRefId[1].required = true;
        } else {
          destinationRefId[1].required = false;
        }
      }
    },
    getComponentByRef(refs, ref) {
      return refs.find((component) => component.$refs[ref]);
    },
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
</style>
