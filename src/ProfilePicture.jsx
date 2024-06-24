
import profileImage from './assets/profile.jpg';

function ProfilePicture() {

    // const imageUrl = './src/assets/profile.jpg';

    const handleClick = (e)=> e.target.style.display ="none";

  return (

    <img onClick={(e)=> handleClick(e)} src = {profileImage}></img>
  )
}

export default ProfilePicture
