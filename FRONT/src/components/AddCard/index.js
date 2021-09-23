import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { changeNewCardCertification, changeNewCardField } from '../../action/cards';

import Button from '../GenericComponents/Button';
import Field from '../GenericComponents/Field';

import './add-card.scss';

const animatedComponents = makeAnimated();

const AddCard = () => {
  const dispatch = useDispatch();

  const newCardTitle = useSelector((state) => state.cards.newCardTitle);
  const newCardDescription = useSelector((state) => state.cards.newCardDescription);
  const newCardUrl = useSelector((state) => state.cards.newCardUrl);
  const newCardImage = useSelector((state) => state.cards.newCardImage);
  const newCardLanguage = useSelector((state) => state.cards.newCardLanguage);
  const newCardType = useSelector((state) => state.cards.newCardType);
  const newCardLevel = useSelector((state) => state.cards.newCardLevel);

  const languageOptions = [
    { label: 'Français', value: 'fr' },
    { label: 'Anglais', value: 'en' },
    { label: 'Autre', value: 'other' },
  ];

  const typeValues = [
    { value: 'site_web', label: 'Site web' },
    { value: 'article', label: 'article' },
    { value: 'video', label: 'Vidéo' },
    { value: 'repo', label: 'Repo' },
    { value: 'package', label: 'Package' },
    { value: 'image', label: 'Image' },
    { value: 'other', label: 'Autre' },
  ];

  const levelValues = [
    { value: 'beginner', label: 'Débutant' },
    { value: 'intermediate', label: 'Intermédiaire' },
    { value: 'advanced', label: 'Avancé' },
    { value: 'expert', label: 'Expert' },
  ];

  const techValues = [
    { value: 'javascript', label: 'JS' },
    { value: 'php', label: 'PHP' },
    { value: 'c++', label: 'C++' },
    { value: 'react', label: 'React' },
  ];

  return (
    <div className="add-card">
      <h2 className="add-card__title">Ajout d'une nouvelle ressource!</h2>
      <Field
        className="add-card__input-title"
        value={newCardTitle}
        type="text"
        name="newCardTitle"
        placeholder="Titre de la ressource"
        handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'newCardTitle'))}
        required
      />
      <Field
        className="add-card__input-description"
        value={newCardDescription}
        type="text"
        name="newCardDescription"
        placeholder="Description"
        handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'newCardDescription'))}
        required
      />
      <Field
        className="add-card__input-description"
        value={newCardUrl}
        type="text"
        name="newCardUrl"
        placeholder="Lien de la ressource"
        handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'newCardUrl'))}
        required
      />
      <Field
        className="add-card__input-image"
        value={newCardImage}
        type="text"
        name="newCardImage"
        placeholder="Url de l'image"
        handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'newCardImage'))}
        required
      />
      <div value={newCardType} className="add-card__input-type" onChange={(e) => dispatch(changeNewCardField(e.target.value, 'newCardType'))}>
        {typeValues.map((type) => (
          <div>
            <input id={type.value} type="radio" value={type.value} name="type" />
            <label htmlFor={type.value}>{type.label}</label>
          </div>
        ))}
      </div>
      <div value={newCardLevel} className="add-card__input-level" onChange={(e) => dispatch(changeNewCardField(e.target.value, 'newCardLevel'))}>
        {levelValues.map((level) => (
          <div>
            <input id={level.value} type="radio" value={level.value} name="level" />
            <label htmlFor={level.value}>{level.label}</label>
          </div>
        ))}
      </div>
      <select name="language" value={newCardLanguage} onChange={(e) => dispatch(changeNewCardField(e.target.value, 'newCardLanguage'))} className="add-card__input-language">
        {languageOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        // defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={techValues}
        onChange={(value) => dispatch(changeNewCardField(value, 'newCardTechs'))}
      />
      <label htmlFor="certify-add-card">
        <input
          type="checkbox"
          id="certify-add-card"
          name="certify"
          onChange={() => dispatch(changeNewCardCertification())}
          className="add-card__certified"
          required
        />
        Je certifie que la ressource partagée respecte les conditions d'utilisations
      </label>
      <Button
        color
        styling="full"
        handleClick={(e) => e.preventDefault()}
        content="Partager !"
      />
    </div>

  );
};

export default AddCard;
