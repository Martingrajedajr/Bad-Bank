
const AllData = () => {
  const ctx = React.useContext(UserContext);

  const TableHead = () => {
    return (
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    const users = ctx.users.filter((item) => item.name != "");
    const rows = users.map((row, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{row.password}</td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  };

  return (
    <Card
      txtcolor="dark"
      header="All data"
      body={
        <div className="table-responsive">
          <table className="table table-striped">
            <TableHead />
            <TableBody />
          </table>
        </div>
      }
    />
  );
}
