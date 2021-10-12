import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchCardsSearch, setFilter } from '../../action/cardsSearch';
import './search-filters.scss';

const SearchFilters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { darkMode } = useSelector((state) => state.displayOptions);
  const {
    currentSearch, techFilter, categoryFilter, levelFilter, typeFilter, langFilter,
  } = useSelector((state) => state.cardsSearch);

  useEffect(() => {
    const url = `/search?keywords=${currentSearch}&tech=${techFilter}&category=${categoryFilter}&level=${levelFilter}&type=${typeFilter}&lang=${langFilter}`;
    history.push(url);
  }, [techFilter, categoryFilter, levelFilter, typeFilter, langFilter]);

  const handleTechFilterChange = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.currentTarget.value, 'techFilter'));
  };

  const handleCategoryFilterChange = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.currentTarget.value, 'categoryFilter'));
  };

  const handleLevelFilterChange = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.currentTarget.value, 'levelFilter'));
  };

  const handleTypeFilterChange = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.currentTarget.value, 'typeFilter'));
  };

  const handleLangFilterChange = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.currentTarget.value, 'langFilter'));
  };

  return (
    <div className={darkMode ? 'search-filters search-filters--dark' : 'search-filters'}>
      <div className="search-filters__current-search">Recherche : "<span className="search-filters__current-search__item">{currentSearch ? `${currentSearch}` : 'aucune recherche'}</span>"</div>
      <div className="search-filter">
        <select className={techFilter !== 'all' ? 'search-filter__select selected-filter' : 'search-filter__select'} name="tech" id="tech-filter" onChange={handleTechFilterChange} value={techFilter}>
          <option className="search-filter__option search-filter__option--default" value="all">Technologie</option>
          <option className="search-filter__option" value="all">Tout</option>
          <option className="search-filter__option" value="javascript">Javascript</option>
          <option className="search-filter__option" value="css">CSS</option>
          <option className="search-filter__option" value="mongodb">MongoDB</option>
          <option className="search-filter__option" value="php">PHP</option>
          <option className="search-filter__option" value="html">HTML</option>
          <option className="search-filter__option" value="wordpress">WordPress</option>
          <option className="search-filter__option" value="postgresql">PostGresQL</option>
          <option className="search-filter__option" value="markdown">MarkDown</option>
          <option className="search-filter__option" value="ruby">Ruby</option>
          <option className="search-filter__option" value="python">Python</option>
          <option className="search-filter__option" value="other">Autre</option>
        </select>
      </div>
      <div className="search-filter">
        <select className={categoryFilter !== 'all' ? 'search-filter__select selected-filter' : 'search-filter__select'} name="category" id="category-filter" onChange={handleCategoryFilterChange} value={categoryFilter}>
          <option className="search-filter__option search-filter__option--default" value="all">Catégorie</option>
          <option className="search-filter__option" value="all">Tout</option>
          <option className="search-filter__option" value="apprendre">Apprendre</option>
          <option className="search-filter__option" value="approfondir">Approfondir</option>
          <option className="search-filter__option" value="entrainement">Entrainement</option>
          <option className="search-filter__option" value="autre">Autre</option>
        </select>
      </div>
      <div className="search-filter">
        <select className={levelFilter !== 'all' ? 'search-filter__select selected-filter' : 'search-filter__select'} name="level" id="level-filter" onChange={handleLevelFilterChange} value={levelFilter}>
          <option className="search-filter__option search-filter__option--default" value="all">Niveau</option>
          <option className="search-filter__option" value="all">Tout</option>
          <option className="search-filter__option" value="débutant">Débutant</option>
          <option className="search-filter__option" value="intermédiaire">Intermédiaire</option>
          <option className="search-filter__option" value="avancé">Avancé</option>
          <option className="search-filter__option" value="expert">Expert</option>
        </select>
      </div>
      <div className="search-filter">
        <select className={typeFilter !== 'all' ? 'search-filter__select selected-filter' : 'search-filter__select'} name="type" id="type-filter" onChange={handleTypeFilterChange} value={typeFilter}>
          <option className="search-filter__option search-filter__option--default" value="all">Média</option>
          <option className="search-filter__option" value="all">Tout</option>
          <option className="search-filter__option" value="article">Article</option>
          <option className="search-filter__option" value="vidéo">Vidéo</option>
          <option className="search-filter__option" value="image">Image</option>
          <option className="search-filter__option" value="site_web">Site Web</option>
          <option className="search-filter__option" value="repository">Repository</option>
          <option className="search-filter__option" value="package">Package</option>
          <option className="search-filter__option" value="autre">Autre</option>
        </select>
      </div>
      <div className="search-filter">
        <select className={langFilter !== 'all' ? 'search-filter__select selected-filter' : 'search-filter__select'} name="lang" id="lang-filter" onChange={handleLangFilterChange} value={langFilter}>
          <option className="search-filter__option search-filter__option--default" value="all">Langue</option>
          <option className="search-filter__option" value="all">Tout</option>
          <option className="search-filter__option" value="français">Français</option>
          <option className="search-filter__option" value="anglais">Anglais</option>
        </select>
      </div>
    </div>
  );
};
export default SearchFilters;
