export const findPartner = (peopleList) => {
  let matched = [];
  for (let i = 0; i < peopleList.length; i++) {
    for (let j = 0; j < peopleList.length; j++) {
      if (
        (peopleList[i].gender === peopleList[j].partnerGender ||
          peopleList[j].partnerGender === 'both') &&
        (peopleList[i].partnerGender === peopleList[j].gender ||
          peopleList[i].partnerGender === 'both') && // 성별과 원하는 성별이 맞는 상황
        peopleList[i].peopleName !== peopleList[j].peopleName &&
        (peopleList[i].healthExperience === peopleList[j].partnerExperience ||
          peopleList[j].partnerExperience === 'both') &&
        (peopleList[j].healthExperience === peopleList[i].partnerExperience ||
          peopleList[i].partnerExperience === 'both') &&
        i < j
      ) {
        matched.push([peopleList[i].peopleName, peopleList[j].peopleName]);
      }
    }
  }
  return matched;
};
