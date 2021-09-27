import './user-bookmarks.scss';
import { useDispatch, useSelector } from 'react-redux';


const UserBookmarks = () => {
  // const user = useSelector((state) => state.user);
  // console.log(user)

  return (
    <div className="user-bookmarks">
      coucou
      {/* <div className="user-bookmarks__user-container">
        <div className="user-bookmarks__user-container__initials">

        </div>
        <div className="user-bookmarks__user-container__username">
          {user.username}
        </div>
      </div>
      <div className="user-bookmarks__total-bookmarks">

      </div>
      <div className="user-bookmarks__bookmarks-container">

      </div> */}

    </div>
  );
}
=======
import Card from '../../Card';

<<<<<<<< HEAD:FRONT/src/components/UserBookmarks/index.js
const UserBookmarks = () => (
  <div className="user-bookmarks">
    Favoris
  </div>
);
========


const UserBookmarks = () => {
  const { username, bookmarks } = useSelector((state) => state.user);
  console.log(bookmarks)

  return (
    <div className="user-bookmarks">
      <div className="user-bookmarks__user-container">
        <div className="user-bookmarks__user-container__initials">
          {username.charAt(0)}
        </div>
        <div className="user-bookmarks__user-container__username">
          {username}
        </div>
      </div>
      <div className="user-bookmarks__total-bookmarks">
        {`${bookmarks.length} favoris`}
      </div>
      <div className="user-bookmarks__bookmarks-container">
        {
          bookmarks.map((bookmark) => (
            <Card key={bookmark.id} card={bookmark} />
          ))
        }
      </div>
    </div>
  );
}

export default UserBookmarks;
