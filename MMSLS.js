const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    "https://www.maimemo.com/share/page?uid=32529553&pid=eaa44d266634ddb363226c904075eacd&tid=04ef5726fd328784b7947f88a80d0a52",
    
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
