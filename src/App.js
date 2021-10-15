import './App.css';

function App() {
  return (
    <>
    <body className="bg-image">
      <div class="d-flex justify-content-center">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                <a class="nav-link" href="/">Features</a>
                <a class="nav-link" href="/">Pricing</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </body>
    </>
  );
}

export default App;
