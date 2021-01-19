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
    <view class="rent">
      <view class="rent_item" v-for="item in rent_list" :key="item.type" @click="type = item.type">
        <view class="rent_bg" :style="{ background: item.rent_bg }">
          <view v-show="item.type == 2" class="circle up_circle"></view>
          <view v-show="item.type == 3" class="circle down_circle"></view>
        </view>
        <text>{{ item.title }}</text>
      </view>
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
        { date: "2021-1-1", type: 1, rent_bg: "#e9f4c9"},
        { date: "2021-1-2", type: 2, rent_bg: "#e9f4c9"},
        { date: "2021-1-3", type: 3, rent_bg: "#e9f4c9"},
        { date: "2021-1-4", type: 4, rent_bg: "#bdb83d"},
        { date: "2021-1-5", type: 5, rent_bg: "#a7defd"},
        { date: "2021-1-6", type: 6, rent_bg: "#ffb233"},
      ],
      month: {
        year: 2020,
        month: 6,
      },
      rent_list: [
        {
          type: 1,
          rent_bg: "#e9f4c9",
          title: "全日在租",
        },
        {
          type: 2,
          rent_bg: "#e9f4c9",
          title: "上午在租",
        },
        {
          type: 3,
          rent_bg: "#e9f4c9",
          title: "下午在租",
        },
        {
          type: 4,
          rent_bg: "#bdb83d",
          title: "今日",
        },
        {
          type: 5,
          rent_bg: "#a7defd",
          title: "维保",
        },
        {
          type: 6,
          rent_bg: "#ffb233",
          title: "共享中",
        },
      ],
      type: 0, // 请先选择在租模式
    };
  },
  components: {
    "v-calendar": calendar,
  },
  onLoad() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
  },
  methods: {
    calendarTap(e) {
      if(!this.type) {
        uni.showToast({
          title: '请先选择在租模式',
          icon: 'none'
        });
        return
      }
      let index = this.rent_list.findIndex(item => item.type == this.type)
      let date = e.year + "-" + (parseInt(e.month) + 1) + "-" + e.day
      this.extraData.push({date, type: this.type, rent_bg: this.rent_list[index].rent_bg})
    },
    monthTap(val) {
      let { year, month } = val;
      this.month = {
        year: year,
        month: month,
      };
      // 此处获取动态的数据，赋值给extraData
    },
  },
};
</script>

<style lang="scss" scoped>
.rent {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .rent_item {
    width: 33.3%;
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    font-size: 30rpx;
    .rent_bg {
      width: 58rpx;
      height: 58rpx;
      border-radius: 50%;
      margin-left: 28rpx;
      margin-right: 20rpx;
      position: relative;
      .circle{
        width: 20rpx;
        height: 20rpx;
        background: #ff0120;
        border-radius: 50%;
        position: absolute;
        right: -20rpx;
        &.up_circle {
          top: 0;
        }
        &.down_circle{
          bottom: 0;
        }
      }
    }
  }
}
</style>