function NavBar(){
  return(
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
      </div>
    </nav>
    </>
  );
}