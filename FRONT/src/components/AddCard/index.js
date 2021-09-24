import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { changeNewCardCertification, changeNewCardField, changeNewCardTechs } from '../../action/cards';

import Button from '../GenericComponents/Button';
import Field from '../GenericComponents/Field';
import TextareaField from '../GenericComponents/TextareaField';

import './add-card.scss';

const animatedComponents = makeAnimated();

const AddCard = () => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.cards.newCard.title);
  const description = useSelector((state) => state.cards.newCard.description);
  const url = useSelector((state) => state.cards.newCard.url);
  const image = useSelector((state) => state.cards.newCard.image);
  const website = useSelector((state) => state.cards.newCard.website);

  const customTheme = (theme) => ({
    ...theme,
    borderRadius: 5,
    colors: {
      ...theme.colors,
      primary25: '#F0EFEF',
      primary: '#058EA7',
      neutral20: '#F0EFEF',
    },
  });

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
      <h2 className="add-card__title">Ajout d'une nouvelle ressource</h2>
      <Field
        className="add-card__input-title"
        value={title}
        type="text"
        name="title"
        placeholder="Titre de la ressource..."
        handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'title'))}
        required
      />
      <TextareaField
        className="add-card__input-description"
        value={description}
        type="textarea"
        name="description"
        placeholder="Description..."
        handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'description'))}
        required
      />
      <Field
        className="add-card__input-image"
        value={website}
        type="text"
        name="website"
        placeholder="Nom du site..."
        handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'website'))}
        required
      />
      <Field
        className="add-card__input-description"
        value={url}
        type="text"
        name="url"
        placeholder="Lien de la ressource..."
        handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'url'))}
        required
      />
      <Field
        className="add-card__input-image"
        value={image}
        type="text"
        name="newCardImage"
        placeholder="Url de l'image..."
        handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'image'))}
        required
      />
      <Select
        placeholder="Type de ressource..."
        closeMenuOnSelect
        components={animatedComponents}
        options={typeValues}
        onChange={(value) => dispatch(changeNewCardField(value.value, 'type'))}
        theme={customTheme}
      />
      <Select
        placeholder="Technologies..."
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={techValues}
        onChange={(value) => dispatch(changeNewCardTechs(value, 'techs'))}
        theme={customTheme}
      />
      <Select
        placeholder="Niveau..."
        closeMenuOnSelect
        components={animatedComponents}
        options={levelValues}
        onChange={(value) => dispatch(changeNewCardField(value.value, 'level'))}
        theme={customTheme}
      />
      <Select
        placeholder="Langue..."
        closeMenuOnSelect
        components={animatedComponents}
        options={languageOptions}
        onChange={(value) => dispatch(changeNewCardField(value.value, 'language'))}
        theme={customTheme}
      />
      <label className="add-card__input-certified" htmlFor="certify-add-card">
        <input
          type="checkbox"
          id="certify-add-card"
          name="certification"
          onChange={() => dispatch(changeNewCardCertification())}
          className="add-card__certified"
          required
        />
        Je certifie que la ressource partagée respecte les conditions d'utilisations
      </label>
      <div className="add-card__button">
        <Button
          color
          styling="full"
          handleClick={(e) => e.preventDefault()}
          content="Partager !"
        />
      </div>
    </div>

  );
};

export default AddCard;
