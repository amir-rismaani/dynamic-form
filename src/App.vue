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
import { formData } from "./data/formData";
import FormItem from "./components/FormItem.vue";
export default {
  name: "App",

  components: { FormItem },

  data: () => ({
    fields: formData,
    //
  }),
};
</script>

<style lang="sass">
#app
  direction: rtl
</style>