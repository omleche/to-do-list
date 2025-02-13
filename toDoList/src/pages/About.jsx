import { Link } from "react-router-dom";

function About() {
    return (
      <div className="list-container">
        <h1>about this project</h1>
       <br></br>
        <p>
          this project is done as a code along example to showcase a project that
          has: <br />-
          <i>
            Full CRUD operations by making request to a JSON server ✅<br />
          </i>
          -
          <i>
            A SPA React Application consisting of multiple views ✅ <br />
          </i>
          -
        </p>
        For Web Development Full Time class of January 2025 💟
        Made by <Link to="https://github.com/sllorens-cuenca" className="link-text">Sergio Llorens</Link> and <Link to="https://github.com/omleche" className="link-text">Olga ML</Link>
      </div>
    );
  }
  
  export default About;