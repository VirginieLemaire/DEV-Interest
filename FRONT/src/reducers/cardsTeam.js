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
      linkedin:"https://www.linkedin.com/in/virginie-lemaire/",
      github:"https://github.com/VirginieLemaire",
      isFlipped: true,
      letter: "D",
    },
    {
      id: 2,
      title:"Frédéric",
      image:fred,
      role:"Lead Dev Back",
      techs: ['Javascript', 'PostgreSQL', 'Autres'],
      linkedin:"https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-botella-6564b3124/",
      github:"https://github.com/Frbot25",
      isFlipped: true,
      letter: "E",
    },
    {
      id: 3,
      title:"Alexandre",
      image:alex,
      role:"Scrum Master",
      techs: ['Javascript', 'CSS'],
      linkedin:"https://www.linkedin.com/in/alexandre-demartin/",
      github:"https://github.com/AlexandreDemartin",
      isFlipped: true,
      letter: "V",
    },
    {
      id: 4,
      title:"Romain",
      image:romain,
      role:"Lead Dev Front",
      techs: ['Javascript', 'CSS'],
      linkedin:"https://www.linkedin.com/in/romain-accoce/",
      github:"https://github.com/romainAccoce",
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
