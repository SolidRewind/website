function Contributor(props) {

  return (
    <nav class='teamMember'>
        <img class='portrait' src={props.portrait}></img>
        { props.name }
        <a href={ props.linkedIn } target='_blank' class='teamLink'>LinkedIn</a>
        <a href={ props.gitHub } target='_blank' class='teamLink'>GitHub</a>
    </nav>
  );
}

export default Contributor;
