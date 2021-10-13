import { FLIP_CARD } from "../action/cardsTeam";
import virginie from "../../public/avatars/avatar-Virginie.png";
import fred from "../../public/avatars/avatar-Fred.png"
import alex from "../../public/avatars/avatar-Alex.png"
import romain from "../../public/avatars/avatar-Romain.png"


export const initialState = {
  teamCards: [
    {
      id: 1,
      title:"Virginie",
      image:virginie,
      role:"Product Owner / Git Master",
      techs: ['Javascript', 'PostgreSQL', 'Autres'],
      linkedin:"",
      github:"",
      isFlipped: true,
      letter: "D",
    },
    {
      id: 2,
      title:"Frédéric",
      image:fred,
      role:"Lead Dev Back",
      techs: ['Javascript', 'PostgreSQL', 'Autres'],
      linkedin:"",
      github:"",
      isFlipped: true,
      letter: "E",
    },
    {
      id: 3,
      title:"Alexandre",
      image:alex,
      role:"Scrum Master",
      techs: ['Javascript', 'CSS'],
      linkedin:"",
      github:"",
      isFlipped: true,
      letter: "V",
    },
    {
      id: 4,
      title:"Romain",
      image:romain,
      role:"Lead Dev Front",
      techs: ['Javascript', 'CSS'],
      linkedin:"",
      github:"",
      isFlipped: true,
      letter: "",
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
