<template>
  <v-app>
    <v-container>
      <v-form>
        <form-item
          v-for="(field, index) in fields"
          :field="field"
          :key="index"
        />
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { formData } from "./data/formData";
import FormItem from "./components/FormItem.vue";
export default {
  name: "App",

  components: { FormItem },

  data: () => ({
    fields: formData,
    //
  }),
  computed: {
    ...mapGetters(["getFormData"]),
  },
};
</script>

<style lang="sass">
#app
  direction: rtl
</style>