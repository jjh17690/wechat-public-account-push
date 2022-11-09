/* eslint-disable */
const TEMPLATE_CONFIG = [
  {早上好宝宝 {{date.DATA}} 城市：{(city.DATAfY 天气：t'weather.DATAH 最低气温：tmin_temperature.DATAf} 最高气温：fmax_ temperature.DATAH 今天是我们恋爱的第tlove_ day.DATA}天 {{birthday_message.DATA]] {one_talk.DATA}} -- {{talk_ from.DATA}} {{note_en.DATA}} {{note_ch.DATA}}
    
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
