const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    "https://www.maimemo.com/share/page?uid=32529553&pid=87ac9a7e4823c4c7288b21f19fd78660&tid=b86ffc794c7c0e1b23e891492a875b90",
    
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
