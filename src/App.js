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
          <div className="d-flex justify-content-center">
            <img src="./dp.jpg" className="dp-pic" alt="dp" />
          </div>
          <br/>
          <h1 className="text-center text-light fw-bold">
            Hi! I'm Badri Vishal Mani Tripathi
          </h1>
          <br />
          <h4 className="text-center text-light">
            I'm a Front end Developer and a Competitive Programmer
          </h4>
          <br />
          <br />
          <br />
        </section>
      </div>
      <section id="about" className="about bg-light">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI1IiBoZWlnaHQ9Ijk5MCIgdmlld0JveD0iMCAwIDcyNSA5OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY2My45NzMiIHk9Ii00NTQiIHdpZHRoPSIxMjcwLjAzIiBoZWlnaHQ9IjkzOSIgcng9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2NjMuOTczIC00NTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NjMuOTczIiB5MT0iLTQ1NCIgeDI9IjE1NTkuNjMiIHkyPSI3NTcuNDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTk4RjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDk2MURDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" style={{float: "right", maxWidth: "100%", width: "400px"}} alt="purple-img" />
        <div className="container">
          <h1 className="text-dark py-5 fw-bold">
            About Me
          </h1>
          <p className="text-dark fs-5" style={{marginTop: '-35px'}}>
            I am front end web developer from India, who also likes to do competitive programming and programming in Python.
          </p>
          <br />
          <h2 className="text-dark fw-bold">
            Languages
          </h2>
          <br />
          <p className="text-dark fs-5" style={{marginTop: '-5px'}}>
            I know languages like React JS, Java Script, HTML, CSS, Git & GitHub, Tailwind CSS, Python, Flask, and Bootstrap
          </p>
          <br />
          <br />
          <div className="row">
            <div className="col-md-1">
              <div className="container-item">
                <a href="https://codechef.com/users/mrbluebird2" className="text-dark"><i className="fa fa-cc text-dark"></i></a>
              </div>
            </div>
            <div className="col-md-1" style={{marginLeft: '-30px'}}>
              <div className="container-item">
                <a href="https://www.linkedin.com/in/badri-vishal-mani-tripathi-721a8421a/" className="text-dark"><i className="fa fa-linkedin text-dark"></i></a>
              </div>
            </div>
            <div className="col-md-1" style={{marginLeft: '-35px'}}>
              <div className="container-item">
                <a href="https://github.com/mrbluebird2" className="text-dark"><i className="fa fa-github text-dark"></i></a>
              </div>
            </div>
            <div className="col-md-1" style={{marginLeft: '-35px'}}>
              <div className="container-item">
                <a href="mailto:badrivishalmanitripathi@gmail.com" className="text-dark"><i className="fa fa-envelope text-dark"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
    </>
  );
}

export default App;
