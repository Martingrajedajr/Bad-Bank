const Spa = () => {
  return (
    <HashRouter>
    <NavBar/>
    <UserContext.Provider value={{users:[{name:'',email:'',password:'',balance:null}]}}>
      <div className="container" style={{padding: "20px"}}>
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
      </div>          
    </UserContext.Provider>      
  </HashRouter>
);
}
const footer= () => {
<footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Corpus Christi, Texas, USA 
                         </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                    
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/martin-grajeda-454429114/"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Martingrajedajr"><i class="fab fa-fw fa-github"></i></a>
                    </div>
                </div>
            </div>
        </footer>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Spa />
);
