<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col lg="4" md="5" sm="6">
          <v-form ref="form" lazy-validation>
            <form-item
              v-for="(field, index) in fields"
              :field="field"
              :key="index"
            />
          </v-form>
          <Button @onSubmit="submitForm" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { formData } from "./data/formData";
import utility from "./mixins/utility";
import FormItem from "./components/FormItem.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  mixins: [utility],
  components: { FormItem, Button },

  data: () => ({
    fields: formData,
  }),
  computed: {
    ...mapGetters(["getFormData"]),
  },
  methods: {
    async submitForm() {
      const isValid = this.$refs.form.validate();

      if (isValid) {
        alert("submited");
      }
    },
  },
};
</script>

<style lang="sass">
</style>