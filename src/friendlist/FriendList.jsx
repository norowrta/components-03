import css from "./friendlist.module.css";
import friends from "./friendlist.json";

function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${css[isOnline ? "online" : "offline"]}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}> {name} </p>
    </li>
  );
}

export default function FriendList() {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}
