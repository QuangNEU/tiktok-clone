import { useParams } from 'react-router-dom';

function Profile() {
    const { nickname } = useParams();
    console.log('nickname:', nickname);

    return <h2>Profile page of {nickname}</h2>;
}

export default Profile;