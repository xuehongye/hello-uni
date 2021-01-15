<template>
  <view class="content">
    <v-calendar
      name="calendar"
      :defaultTime="time"
      :extraData="extraData"
      @calendarTap="calendarTap"
      showDot
      @monthTap="monthTap"
    />
    <view class="">

    </view>
  </view>
</template>

<script>
import calendar from "../../components/tale-calendar/calendar";
export default {
  data() {
    return {
      time: { year: new Date().getFullYear(), month: new Date().getMonth() },
      extraData: [
        { date: "2021-1-3", value: "签到", dot: true, active: true },
        { date: "2021-1-5", value: "未签到", dot: true, active: false },
        { date: "2021-1-7", value: "签到", dot: true, active: true },
      ],
      month: {
        year: 2020,
        month: 6,
      },
    };
  },
  components: {
    "v-calendar": calendar,
  },
  onLoad() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
  },
  methods: {
    calendarTap(e) {
      console.log(e);
    },
    monthTap(val) {
      let { year, month } = val;
      this.month = {
        year: year,
        month: month,
      };
      // 此处获取动态的数据，赋值给extraData
      this.extraData = [
        { date: "2020-11-3", value: "签到", dot: true, active: true },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>