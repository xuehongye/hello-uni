<template>
  <calendar
    :date="date"
    :disable-before="true"
    @change="change"
    @to-click="toClick"
  />
</template>

<script>
import calendar from "@/components/uni-calendar/uni-calendar.vue";
export default {
  data() {
    return {
      date: "2019-03-10",
    };
  },
  components: {
    calendar,
  },
  methods: {
    change(e) {
      console.log(e);
    },
    toClick(e) {
      console.log(e);
    },
  },
};
</script>