function Contributor(props) {

  return (
    <nav class='teamMember'>
        <img class='portrait' src={props.portrait} alt="portrait of company founder"></img>
        { props.name }
        <a href={ props.linkedIn } target='_blank' class='teamLink' >LinkedIn</a>
        <a href={ props.gitHub } target='_blank' class='teamLink'>GitHub</a>
    </nav>
  );
}

export default Contributor;
