<template>
  <v-row>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined block v-bind="attrs" v-on="on" :ref="attr.name">
          انتخاب شهر
        </v-btn>
      </template>
      <v-card>
        <v-card-title>انتخاب شهر</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px">
          <v-radio-group v-model="inputValue" @change="chageItem" column>
            <v-radio
              v-for="(value, key) in cities"
              :key="key"
              :data-testid="`city-modal-${key}`"
              :label="value"
              :value="parseInt(key)"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">
            بستن
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            اعمال
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import utility from "../mixins/utility";
import { cities } from "../data/cities";
export default {
  mixins: [utility],
  data() {
    return {
      cities,
      dialog: false,
      dialogm1: "",
    };
  },
};
</script>

<style>
</style>