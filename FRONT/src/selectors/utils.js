export const randomArrayShuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue = 0;
  let randomIndex = 0;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const getDomainName = (url) => {
  const domain = (new URL(url));
  return domain.hostname.replace('www.', '');
};

export const formatDate = (date) => (
  new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
); 

// const parseStringJavascript = (string, techArray) => {
//   const lowerString = string.toLowerCase();
//   techArray.forEach((tech) => {
//     const includeTech = lowerString.includes(tech.label.toLowerCase);
//     if(includeTech) {
//       () => dispatch(changeNewCardTechs(tech.value, 'techs'))
//     }
//   }) 
// }


// const addTech = 

// const isJavascript = parseStringJavascript(title);

// console.log(isJavascript)

// if (isJavascript) {
//   console.log('IsJavascript');
//   return addTech
// }

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

