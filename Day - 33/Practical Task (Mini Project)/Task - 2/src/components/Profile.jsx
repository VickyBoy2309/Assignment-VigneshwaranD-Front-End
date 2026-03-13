import PFP from "../assets/Iron Man Anime PFP.jpg"

function Profile() {
  return (
    <div className="profile-card">
      <img
      src = {PFP}
        alt="Profile"
        className="profile-img"
      />

      <h2>Vicky_Boy_23</h2>
      <p><b>Role:</b> CS Student</p>
      <p><b>Skills:</b> React, JavaScript, MySQL</p>

      <button className="follow-btn">Follow</button>
    </div>
  );
}

export default Profile;