
const CreateAccount = () => {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx                     = React.useContext(UserContext);  

  const validate = (field, label) => {
      if (!field) {
        setStatus('Error: Please input ' + label);
        setTimeout(() => setStatus(''),2000);
        return false;
      }

      if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        clearForm();
        return false;
      }

      return true;
    }

  const handleCreate = () => {
    console.log(name,email,password);
    if (!validate(name,     'Name'))     return;
    if (!validate(email,    'Email'))    return;
    if (!validate(password, 'Password')) return;
    ctx.users.push({name,email,password,balance:null});
    setShow(false);
    alert(`Successfully Created Account`);
  }    

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="dark"
      header="CREATE ACCOUNT"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" id="create" onClick={handleCreate}>CREATE ACCOUNT</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button>
              </>
            )}
    />
  )
}