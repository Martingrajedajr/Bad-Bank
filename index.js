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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Spa />
);
