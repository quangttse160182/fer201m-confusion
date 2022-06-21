import { Redirect } from 'react-router-dom';

export const Profile = ({ match }) => {
  if (match.params.isLogin != 0) {
    return (
      <div>
        <h2>Welcome: {match.params.name}</h2>
      </div>
    );
  } else return <Redirect to='/home' />;
};
