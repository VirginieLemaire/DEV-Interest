import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { fetchCardsSearch, setFilter } from '../../action/cardsSearch';
import './search-filters.scss';

const SearchFilters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { darkMode } = useSelector((state) => state.displayOptions);

  const {
    currentSearch, techFilter, categoryFilter, levelFilter, typeFilter, langFilter,
  } = useSelector((state) => state.cardsSearch);

  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();

  const keywords = query.get('keywords');
  const tecFilter = query.get('tech');
  const catFilter = query.get('category');
  const levFilter = query.get('level');
  const typFilter = query.get('type');
  const lanFilter = query.get('lang');

  // console.log('-------------------------------');
  // console.log('keywords', keywords);
  // console.log('techFilter', tecFilter);
  // console.log('categoryFilter', catFilter);
  // console.log('levelFilter', levFilter);
  // console.log('typeFilter', typFilter);
  // console.log('langFilter', lanFilter);

  useEffect(() => {
    dispatch(setFilter(tecFilter, 'techFilter'));
    dispatch(setFilter(catFilter, 'categoryFilter'));
    dispatch(setFilter(levFilter, 'levelFilter'));
    dispatch(setFilter(typFilter, 'typeFilter'));
    dispatch(setFilter(lanFilter, 'langFilter'));
  }, []);

  const handleTechFilterChange = (e) => {
    dispatch(setFilter(e.currentTarget.value, 'techFilter'));
    history.push(`/search?keywords=${keywords}&tech=${e.currentTarget.value}&category=${catFilter}&level=${levFilter}&type=${typFilter}&lang=${lanFilter}`);
  };

  const handleCategoryFilterChange = (e) => {
    dispatch(setFilter(e.currentTarget.value, 'categoryFilter'));
    history.push(`/search?keywords=${keywords}&tech=${tecFilter}&category=${e.currentTarget.value}&level=${levFilter}&type=${typFilter}&lang=${lanFilter}`);
  };

  const handleLevelFilterChange = (e) => {
    dispatch(setFilter(e.currentTarget.value, 'levelFilter'));
    history.push(`/search?keywords=${keywords}&tech=${tecFilter}&category=${catFilter}&level=${e.currentTarget.value}&type=${typFilter}&lang=${lanFilter}`);
  };

  const handleTypeFilterChange = (e) => {
    dispatch(setFilter(e.currentTarget.value, 'typeFilter'));
    history.push(`/search?keywords=${keywords}&tech=${tecFilter}&category=${catFilter}&level=${levFilter}&type=${e.currentTarget.value}&lang=${lanFilter}`);
  };

  const handleLangFilterChange = (e) => {
    dispatch(setFilter(e.currentTarget.value, 'typeFilter'));
    history.push(`/search?keywords=${keywords}&tech=${tecFilter}&category=${catFilter}&level=${levFilter}&type=${typFilter}&lang=${e.currentTarget.value}`);
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
