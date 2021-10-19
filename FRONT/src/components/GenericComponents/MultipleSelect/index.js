import { useDispatch, useSelector } from 'react-redux';
import { changeUpdateCardTechs } from '../../../action/cardUpdate';
import './multiple-select.scss';

const MultipleSelect = () => {
  const dispatch = useDispatch();
  const { techs } = useSelector((state) => state.cardUpdate);
  // Handle the onChange event of the select
  const onChangeHandler = (event) => {
    const { selectedOptions } = event.currentTarget;

    const newTechs = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      newTechs.push(selectedOptions[i].value);
    }

    console.log(newTechs);

    dispatch(changeUpdateCardTechs(newTechs, 'techs'));
  };

  return (
    <div className="multiple-select-container">
      <h3>KindaCode.com</h3>
      <select multiple onChange={onChangeHandler} className="multiple-select-select">
        <option value={1}>Javascript</option>
        <option value={2}>CSS</option>
        <option value={3}>MongoDB</option>
        <option value={4}>PHP</option>
        <option value={5}>HTML</option>
        <option value={6}>WordPress</option>
        <option value={7}>PostGreSQL</option>
        <option value={8}>MarkDown</option>
        <option value={9}>Ruby</option>
        <option value={10}>Python</option>
        <option value={11}>Autre</option>
      </select>
      <br />
      <div>
        {techs
      && techs.map((color) => <span className="multiple-select-tech">{color}</span>)}
      </div>
    </div>
  );
};
export default MultipleSelect;
