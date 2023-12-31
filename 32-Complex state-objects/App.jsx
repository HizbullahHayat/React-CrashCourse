import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  let starIcon = contact.isFavorite ? 'images/star-filled.png':'images/star-empty.png'

  function toggleFavorite() {
    console.log("Toggle Favorite");
  }

  return (
    <main>
      <article className="card">
        <img src="images/user.png" className="card--image" />
        <div className="card--info">
          <img
            src={`${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
export default App;
