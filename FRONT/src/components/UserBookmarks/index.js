import './user-bookmarks.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookmarkedCards from '../BookmarkedCards';
import { fetchBookmarkedCards } from '../../action/userCurrent';

const UserBookmarks = () => {
  const dispatch = useDispatch();

  const { darkMode, loading } = useSelector((state) => state.displayOptions);
  const { username, bookmarkedCards, bookmarks } = useSelector((state) => state.userCurrent);

  useEffect(() => {
    dispatch(fetchBookmarkedCards());
  }, [bookmarks]);

  if (loading) return null;

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
      <div className="user-bookmarks__total-bookmarks">
        {`${bookmarkedCards.length} favoris`}
      </div>
      <div className="user-bookmarks__bookmarks-container">
        <BookmarkedCards />
      </div>
    </div>
  );
};

export default UserBookmarks;
