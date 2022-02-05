<template>
  <v-row>
    <v-dialog v-model="dialog" scrollable max-width="300px" eager>
      <template v-slot:activator="{ on, attrs }">
        <v-col class="pa-0">
          <v-btn
            :color="
              formData[attr.dependency.required.name] && isInvalidCity
                ? 'error'
                : ''
            "
            outlined
            block
            v-bind="attrs"
            v-on="on"
          >
            {{ cityLableButton }}
          </v-btn>
          <div
            class="v-messages theme--light error--text"
            v-if="formData[attr.dependency.required.name] && isInvalidCity"
            role="alert"
          >
            <div class="v-messages__wrapper">
              <div class="v-messages__message mt-1">این فیلد اجباری است</div>
            </div>
          </div>
        </v-col>
      </template>
      <v-card>
        <v-card-title>انتخاب شهر</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px">
          <v-radio-group
            v-model="inputValue"
            @change="chageItem"
            column
            :ref="attr.name"
            :required="isRequired"
            :rules="getRule"
          >
            <v-radio
              v-for="(value, key) in cities"
              :key="key"
              :data-testid="`city-modal-${key}`"
              :label="value"
              :value="parseInt(key)"
              @change="selectedCity = value"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">
            بستن
          </v-btn>
          <v-btn color="blue darken-1" text @click="setCity"> اعمال </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

import utility from "../mixins/utility";
import { cities } from "../data/cities";
import LabelTexts from "../constants/Labels";

export default {
  mixins: [utility],
  data() {
    return {
      cities,
      dialog: false,
      selectedCity: LabelTexts.chooseCity,
      cityLableButton: LabelTexts.chooseCity,
    };
  },
  computed: {
    ...mapState(["formValidation", "formData"]),
    isInvalidCity() {
      return !this.formValidation && !this.inputValue;
    },
  },
  methods: {
    setCity() {
      this.cityLableButton = this.selectedCity;
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>