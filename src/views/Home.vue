<template>
  <vc-date-picker
    mode="multiple"
    v-model="dates"
    :value="null"
    color="red"
    is-dark
    is-inline
  />
</template>

<script>
import Vue from "vue";

// import DateRangePicker from "vue2-daterange-picker";
// import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";

// Register components in your 'main.js'
Vue.component("calendar", Calendar);
Vue.component("date-picker", DatePicker);

// Or just use in separate component
export default {
  components: {
    // Calendar,
    // DatePicker
  },
  name: "SlotsDemo",
  // components: { VCalendar },
  data() {
    // let startDate = new Date();
    // let endDate = new Date();
    // endDate.setDate(endDate.getDate() + 6);
    return {
      // dateRange: { startDate, endDate }
      dates: {
        start: null, // From the beginning of time
        end: new Date(), // Jan 1st, 2019
        weekdays: [0] // ...on Sundays and Saturdays
      }
    };
  },
  filters: {
    date(val) {
      return val ? val.toLocaleString() : "";
    }
  }
};
</script>

<style scoped>
.slot {
  background-color: #aaa;
  padding: 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text-black {
  color: #000;
}
</style>
