import './user-bookmarks.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookmarkedCards from '../BookmarkedCards';
import Contributions from '../Contributions';
import { fetchBookmarkedCards, fetchContributions, updateThumb } from '../../action/userCurrent';
import Loader from '../GenericComponents/Loader';

const UserBookmarks = () => {
  const dispatch = useDispatch();

  const { darkMode, loading } = useSelector((state) => state.displayOptions);

  const {
    username, bookmarkedCards, contributions, thumb, bookmarks,
  } = useSelector((state) => state.userCurrent);
  useEffect(() => {
    dispatch(fetchBookmarkedCards());
    // dispatch(fetchContributions());
  }, [bookmarks]);

  if (loading) return <Loader />;

  return (
    <div className={darkMode ? 'user-bookmarks user-bookmarks--dark' : 'user-bookmarks'}>
      <div className="user-bookmarks__user-container">
        <div className="user-bookmarks__user-container__initials">
          {username.charAt(0)}
        </div>
        <div className="user-bookmarks__user-container__username">
          {username}
        </div>
      </div>
      <div className="user-bookmarks__thumbs">
        <div className={thumb !== 'favorites' ? 'user-bookmarks__thumbs__thumb' : `user-bookmarks__thumbs__thumb--active${darkMode ? '--dark' : ''}`} onClick={() => dispatch(updateThumb('favorites'))}>
          {`${bookmarkedCards.length > 1 ? 'Favoris' : 'Favori'} (${bookmarkedCards.length})`}
        </div>
        <div className={thumb !== 'contributions' ? 'user-bookmarks__thumbs__thumb' : `user-bookmarks__thumbs__thumb--active${darkMode ? '--dark' : ''}`} onClick={() => dispatch(updateThumb('contributions'))}>
          {`${contributions.length > 1 ? 'Contributions' : 'Contribution'} (${contributions.length})`}
        </div>
      </div>
      <div className="user-bookmarks__bookmarks-container">
        { thumb === 'favorites' && <BookmarkedCards /> }
        { thumb === 'contributions' && <Contributions />}
      </div>
    </div>
  );
};

export default UserBookmarks;
