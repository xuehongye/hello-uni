<template>
  <calendar
    :date="date"
    @change="change"
    :selected="selected"
    @to-click="toClick"
    
  />
</template>

<script>
import calendar from "@/components/uni-calendar/uni-calendar.vue";
export default {
  data() {
    return {
      date: "",
      selected: [{
    				date: '2021-01-01'
				}, {
					date: '2021-01-02'
				}, {
					date: '2021-01-03'
				}, {
					date: '2021-01-04'
				}]
    };
  },
  components: {
    calendar,
  },
  methods: {
    change(e) {
      if(this.selected.findIndex(item => item.date === e.fulldate) == -1) {
        this.selected.push({date: e.fulldate})
      }
      console.log(this.selected)
    },
    toClick(e) {
      console.log(e);
    },
  },
};
</script>