export const matchcount = (inTimeMatchedList) => {
  // console.log(inTimeMatchedList);
  let matchedPeopleList = [];
  const matchedPeople = () => {
    for (let i = 0; i < inTimeMatchedList.length; i++) {
      matchedPeopleList.push(inTimeMatchedList[i][0], inTimeMatchedList[i][1]);
    }
  };
  matchedPeople();
  matchedPeopleList = [...new Set(matchedPeopleList)]; // 중복 없는 매칭된 사람들 리스트 만들었음
  // console.log(matchedPeopleList);
  const nameCount = matchedPeopleList.map((person) => {
    return { name: person, count: 0 };
  });

  for (let i = 0; i < inTimeMatchedList.length; i++) {
    for (let j = 0; j < nameCount.length; j++) {
      if (inTimeMatchedList[i][0] === nameCount[j].name) {
        nameCount[j].count += 1;
      }
      if (inTimeMatchedList[i][1] === nameCount[j].name) {
        nameCount[j].count += 1;
      }
    }
  }
  // 위의 for문으로 nameCount는 각 인원이 몇번 매칭되었는지 카운트됨

  nameCount.sort(function (a, b) {
    return a.count - b.count;
  }); //카운트 수 크기순으로 정렬했음
  // console.log(nameCount);

  return nameCount;
};
