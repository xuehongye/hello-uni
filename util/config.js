// 本地ip接口
// const BASE_URL = 'http://47.100.187.238:9002/app'
// 测试接口
const BASE_URL = 'https://task-system-test.yinshare.store/app'
// 正式线上接口
// const BASE_URL = 'http://47.100.187.238:9002/app'

// 登录相关
export const SendLoginSms = BASE_URL + '/auth/sendLoginSms'  // 发送登陆验证码
export const Login = BASE_URL + '/auth/login'  // 登陆接口	
export const SendResetPhoneSms = BASE_URL + '/auth/sendResetPhoneSms'  // 发送修改手机号验证码

// 用户相关
export const Info = BASE_URL + '/user/info'  // 个人中心首页数据	
export const ChangeNickName = BASE_URL + '/user/changeNickName'  // 修改昵称
export const OutMoneyList = BASE_URL + '/user/outMoneyList'  // 佣金列表
export const ResetPhone = BASE_URL + '/user/resetPhone'  // 修改手机号
export const UploadImg = BASE_URL + '/user/uploadImg'  // 修改头像

// 用户任务相关
export const CloseTask = BASE_URL + '/userTask/closeTask'  // 关闭任务	
export const GetTask = BASE_URL + '/userTask/getTask'  // 接受任务
export const TaskData = BASE_URL + '/userTask/taskData'  // 任务汇总数据
export const TaskInfo = BASE_URL + '/userTask/taskInfo'  // 任务详情
export const TaskList = BASE_URL + '/userTask/taskList'  // 任务列表
