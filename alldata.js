
const AllData = () => {
  const ctx = React.useContext(UserContext);
  return (
    <>
    {ctx.users.map((ctx, i) => (
    <Card
    key={i}
    bgcolor="dark"
    header="All Data"
    title={"User Name: " + ctx.name}
    text={"Email Information: " + ctx.email}
    body={"Password: " + ctx.password}
    />
  ))}
  </>
  )
}

