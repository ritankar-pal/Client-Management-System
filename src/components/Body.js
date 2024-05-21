import { Link } from "react-router-dom";

const Body = () => {

  return (
    <div className="container">
      <h1 className="black text-4xl">Premium Termite</h1>
      <h2 className="blue text-2xl underline text-customBlue">Service</h2>

      <div className="service-container">
        <p className="grey text-sm">Termite services require an inspection.</p>
        <p className="grey text-sm">Get Started to Schedule an inspection.</p>
      </div>

      <div className="button-container">
        <Link to='/clientInfo' className="button">Get Started →</Link>
      </div>
    </div>
  );
};

export default Body;
