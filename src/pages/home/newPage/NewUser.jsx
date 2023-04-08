import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Ajit" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Ajit Rijal" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="ajit@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="email" placeholder="987687656" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="email" placeholder="Narayanthan" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value={yes}>Yes</option>
              <option value={no}>No</option>
            </select>
          </div>
        </div>
        <div className="newUserButton">Create</div>
      </form>
    </div>
  );
}
