const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    "https://www.maimemo.com/share/page?uid=32529553&pid=51406dd9e063b581acceb3363d60e3c3&tid=f48c6d61097ae8e60188ad5a69ee20c8",
    
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
