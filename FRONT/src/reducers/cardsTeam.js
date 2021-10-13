import { FLIP_CARD } from "../action/cardsTeam";

export const initialState = {
  teamCards: [
    {
      id: 1,
      title:"Virginie",
      image:"https://www.nombresdesanges.com/wp-content/uploads/2018/09/4.jpg",
      type:"Product Owner / Git Master",
      techs: ['Javascript', 'PostgreSQL', 'Autres'],
      isFlipped: false,
    },
    {
      id: 2,
      title:"Frédéric",
      image:"https://www.nombresdesanges.com/wp-content/uploads/2018/09/4.jpg",
      type:"Product Owner / Git Master",
      techs: ['Javascript', 'PostgreSQL', 'Autres'],
      isFlipped: false,
    },
    {
      id: 3,
      title:"Alexandre",
      image:"https://www.nombresdesanges.com/wp-content/uploads/2018/09/4.jpg",
      type:"Product Owner / Git Master",
      techs: ['Javascript', 'CSS'],
      isFlipped: false,
    },
    {
      id: 4,
      title:"Romain",
      image:"https://www.nombresdesanges.com/wp-content/uploads/2018/09/4.jpg",
      type:"Product Owner / Git Master",
      techs: ['Javascript', 'CSS'],
      isFlipped: false,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    
    case FLIP_CARD:
      const index = state.teamCards.findIndex(card => card.id === action.value); //finding index of the item                                                                      action.payload); //finding index of the item
      const newArray = [...state.teamCards]; //making a new array
      newArray[index].isFlipped = !newArray[index].isFlipped//changing value in the new array
      return { 
        ...state, //copying the orignal state
        teamCards: newArray, //reassingning todos to new array
      }  
    default:
      return state;
  }
};

export default reducer;
