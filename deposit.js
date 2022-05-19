

const Deposit = () => {
	const [show, setShow]                   		= React.useState(true);
	const [status, setStatus] 						= React.useState('');
	const [balance, setBalance]             		= React.useState('');
	const [amount, setAmount]						= React.useState('');
	const [validTransaction, setValidTransaction]   = React.useState(true);
	const ctx                               		= React.useContext(UserContext);

	const validate = (field) => {
        if (Number(field) != field) {
		  alert('Please enter a number.');
		  clearForm();
          return false;
        }
		
		if (Number(field) <= 0) {
			alert('Please only enter positive numbers.');
			clearForm();
			return false;
		}

        return true;
    }

	const handleSubmit = () => {
		
		if(!validate (amount, 'amount')) return;
		ctx.users[0].balance += parseFloat(amount);
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
		  header="DEPOSIT"
		  status={status}
		  body={show ? (
			  <>
			  <h4>Balance ${ ctx.users[0].balance }</h4>
			  <br />
			  <h4>Deposit Amount</h4>
			  <br />
			  <input type="input" className="form-control" id="amount" placeholder="Deposit Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} />
			  <br />
			  <button type="submit" className="btn btn-light" id="create" onClick={handleSubmit}>DEPOSIT</button>
			  </> 
			  ):(
				<>
				<h5>Success</h5>
				<button type="submit" className="btn btn-light" onClick={clearForm}>Make another Deposit.</button>
				</>
			   )}
			/>
	  )
} 
	

