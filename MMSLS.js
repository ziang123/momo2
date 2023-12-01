const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    
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
