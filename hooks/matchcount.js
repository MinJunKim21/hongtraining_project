export const matchcount = (inTimeMatchedList) => {
  console.log(inTimeMatchedList);
  console.log(inTimeMatchedList[0]);
  // console.log(inTimeMatchedList[0][1]);
  const numMatchedEach = [];
  const countMatched = () => {
    for (let i = 0; i < inTimeMatchedList.length; i++) {
      if (!numMatchedEach.includes(inTimeMatchedList[i][0])) {
        numMatchedEach.push(inTimeMatchedList[i][0]);
      }
      if (!numMatchedEach.includes(inTimeMatchedList[i][1])) {
        numMatchedEach.push(inTimeMatchedList[i][1]);
      }
    }
  };
  countMatched();
  console.log(numMatchedEach);
};
