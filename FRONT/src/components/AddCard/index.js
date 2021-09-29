import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  addCard, changeNewCardCertification, changeNewCardField, changeNewCardTechs,
} from '../../action/cardNew';

import { slugify } from '../../selectors/cards';

import Field from '../GenericComponents/Field';
import SubmitButton from '../GenericComponents/SubmitButton';
import TextareaField from '../GenericComponents/TextareaField';
import UrlField from '../GenericComponents/UrlField';

import './add-card.scss';

const animatedComponents = makeAnimated();

const AddCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, darkMode } = useSelector((state) => state.displayOptions);

  const {
    title, description, url, image, website, certification,
  } = useSelector((state) => state.cardNew);

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
    { value: 1, label: 'Français' },
    { value: 2, label: 'Anglais' },
  ];

  const typeValues = [
    { value: 1, label: 'Article' },
    { value: 2, label: 'Vidéo' },
    { value: 3, label: 'Image' },
    { value: 4, label: 'Site Web' },
    { value: 5, label: 'Repository' },
    { value: 6, label: 'Package' },
    { value: 7, label: 'Autre' },
  ];

  const levelValues = [
    { value: 1, label: 'Débutant' },
    { value: 2, label: 'Intermédiaire' },
    { value: 3, label: 'Avancé' },
    { value: 4, label: 'Expert' },
  ];

  const techValues = [
    { value: 1, label: 'JavaScript' },
    { value: 2, label: 'CSS' },
    { value: 3, label: 'MongoDB' },
    { value: 4, label: 'PHP' },
    { value: 5, label: 'HTML' },
    { value: 6, label: 'WordPress' },
    { value: 7, label: 'PostgreSQL' },
    { value: 8, label: 'MarkDown' },
    { value: 9, label: 'Ruby' },
    { value: 10, label: 'Python' },
    { value: 11, label: 'Autre' },
  ];

  const categoryValues = [
    { value: 1, label: 'Apprendre' },
    { value: 2, label: 'Approfondir' },
    { value: 3, label: 'Entrainement' },
    { value: 4, label: 'Autre' },
  ];

  const handleNewCardTitleChange = (e) => {
    dispatch(changeNewCardField(e.target.value, 'title'));
    dispatch(changeNewCardField(slugify(e.target.value), 'slug'));
  };

  const handleSubmitNewCard = (e) => {
    if (certification) {
      e.preventDefault();
      dispatch(addCard());
      history.push('/');
    }
  };

  if (loading) return null;

  return (
    <div className={darkMode ? 'add-card add-card--dark' : 'add-card'}>
      <form className="add-card__form" onSubmit={handleSubmitNewCard}>
        <h2 className={darkMode ? 'add-card__title add-card__title--dark' : 'add-card__title'}>Ajout d'une nouvelle ressource</h2>
        <Field
          className="add-card__input-title"
          value={title}
          type="text"
          name="title"
          placeholder="Titre de la ressource"
          handleChange={handleNewCardTitleChange}
          required
          minlength="10"
          maxlength="120"
        />
        <TextareaField
          className="add-card__input-description"
          value={description}
          type="textarea"
          name="description"
          placeholder="Description"
          handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'description'))}
          required
          minLength="10"
          maxLength="500"
        />
        <Field
          className="add-card__input-website"
          value={website}
          type="text"
          name="website"
          placeholder="Nom du site"
          handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'website'))}
          required
          maxlength="30"
          readOnly
        />
        <UrlField
          className="add-card__input-url"
          value={url}
          name="urlSource"
          placeholder="Lien Url de la ressource"
          handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'url'))}
          required
          readOnly
        />
        <UrlField
          className="add-card__input-image"
          value={image}
          name="urlImage"
          placeholder="Lien Url de l'image"
          handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'image'))}
          required
        />
        <Select
          placeholder="Type de ressource"
          closeMenuOnSelect
          components={animatedComponents}
          options={typeValues}
          onChange={(value) => dispatch(changeNewCardField(value.value, 'type'))}
          theme={customTheme}
        />
        <Select
          placeholder="Technologies"
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={techValues}
          onChange={(value) => dispatch(changeNewCardTechs(value, 'techs'))}
          theme={customTheme}
        />
        <Select
          placeholder="Catégorie"
          closeMenuOnSelect
          components={animatedComponents}
          options={categoryValues}
          onChange={(value) => dispatch(changeNewCardField(value.value, 'category'))}
          theme={customTheme}
        />
        <Select
          placeholder="Niveau"
          closeMenuOnSelect
          components={animatedComponents}
          options={levelValues}
          onChange={(value) => dispatch(changeNewCardField(value.value, 'level'))}
          theme={customTheme}
        />
        <Select
          placeholder="Langue"
          closeMenuOnSelect
          components={animatedComponents}
          options={languageOptions}
          onChange={(value) => dispatch(changeNewCardField(value.value, 'lang'))}
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
          <SubmitButton
            color
            styling="full"
            content="Partager !"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCard;
