import { Avatar } from './Avatar';
const formatDate = (date) => date.toString();

export const Comment = (props) => {
  return (
    <div>
      <div>
        <Avatar user={props.author} />
        <div>{props.author.name}</div>
      </div>
      <div>{props.text}</div>
      <div>{formatDate(props.date)}</div>
    </div>
  );
};
