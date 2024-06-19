import profilePic from './assets/profile.jpg'
import './Card.css';

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className='title'>Shehin Thoombil</h2>
      <p>I am a Self thought Software Developer</p>
    </div>
  )
}

export default Card
