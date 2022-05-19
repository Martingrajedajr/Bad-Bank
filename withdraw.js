
const Withdraw = () => {
  const [show, setShow]                           = React.useState(true);
  const [status, setStatus]                       = React.useState('');
  const [amount, setAmount]                       = React.useState('');
  const [balance, setBalance]                     = React.useState('');
  const [validTransaction, setValidTransaction]   = React.useState(true);
  const ctx                                       = React.useContext(UserContext);

  const validate = (field) => {
    if (Number(field) != field) {
      setTimeout(() => setStatus(''),3000);
      alert('Please enter a number');
      return false;
    }

    if (Number(field) <= 0) {
      alert('Please enter a positive number.');
      return false;
    }
    if (Number(field) > ctx.users[0].balance) {
      alert('Transaction failed, your Withdraw amount is more than your balance.');
      return false;
    }

    return true;
  }

  const handleSubmit = () => {
    if (!validate(amount, 'amount')) return;
    ctx.users[0].balance -= parseInt(amount);
    setShow(false);
    //e.preventDefault();
  }

  const clearForm = () => {
    setAmount('');
    setValidTransaction('');
    setShow(true);
  }

  return (
		<Card
		  bgcolor="dark"
		  header="WITHDRAW"
		  status={status}
		  body={show ? (
			  <>
			  <h4>Balance ${ ctx.users[0].balance }</h4>
			  <br />
        <h4>Withdraw Amount</h4>
			  <br />
			  <input type="input" className="form-control" id="amount" placeholder="Withdraw Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} />
			  <br />
			  <button type="submit" className="btn btn-light" id="create" onClick={handleSubmit}>Withdraw</button>
			  </> 
			  ):(
				<>
				<h5>Success</h5>
				<button type="submit" className="btn btn-light" onClick={clearForm}>Make another Withdrawl.</button>
				</>
			   )}
			/>
	  )
} 
	

