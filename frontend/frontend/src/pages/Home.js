import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import gitaBg from "../assets/bhagavad.webp";

const Home = () => {
  return (
    <>
      <HomeNavbar />

      <div
        className="vh-100 d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: `url(${gitaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
        ></div>

        {/* Content */}
        <div className="container position-relative text-center mt-5 pt-5">

          {/* Carousel */}
          <div
            id="gitaCarousel"
            className="carousel slide mb-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">

              <div className="carousel-item active">
                <p className="fs-3 fst-italic">
                  “You have the right to perform your duties,
                  but not to the fruits of your actions.”
                </p>
                <small className="opacity-75">— Bhagavad Gita 2.47</small>
              </div>

              <div className="carousel-item">
                <p className="fs-3 fst-italic">
                  “Change is the law of the universe.
                  One who accepts change is happy.”
                </p>
                <small className="opacity-75">— Bhagavad Gita 2.14</small>
              </div>

              <div className="carousel-item">
                <p className="fs-3 fst-italic">
                  “A person is made by their faith.
                  As they believe, so they become.”
                </p>
                <small className="opacity-75">— Bhagavad Gita 17.3</small>
              </div>

            </div>
          </div>

          {/* CTA */}
          <Link to="/login">
            <button className="btn btn-warning btn-lg px-5 rounded-pill fw-semibold">
              Enter
            </button>
          </Link>

        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container py-5">
        <h3 className="text-center mb-3">About the Trust</h3>
        <p className="text-center text-muted">
          This Trust Management System is designed to manage members,
          trustees, donations, and expenses with transparency and accountability.
        </p>
      </div>
    </>
  );
};

export default Home;
