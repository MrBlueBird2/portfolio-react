import './App.css';

function App() {
  return (
    <>
    <body className="bg-image">
      <div className="d-flex justify-content-center">
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-4">
            <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                <a className="nav-link active" href="#about">About</a>
                <a className="nav-link active" href="#portfolio">Portfolio</a>
                <a className="nav-link active" href="#internship">Internship</a>
                <a className="nav-link active" href="#profiles">Profiles</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <br />
      <div className="container">
        <section id="home" className="home py-2">
          <div class="d-flex justify-content-center">
            <img src="./dp.jpg" className="dp-pic" />
          </div>
          <br/>
          <h1 className="text-center text-light fw-bold">
            Hi! I'm Badri Vishal Mani Tripathi
          </h1>
          <br />
          <h4 class="text-center text-light">
            I'm a Front end Developer and a Competitive Programmer
          </h4>
          <br />
          <br />
          <br />
        </section>
      </div>
    </body>
    </>
  );
}

export default App;
