// Chosen-button eksempel. Sett inn med <ChosenButton />
class ChosenButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
    if(!this.state.liked){
      document.getElementById("cText").style.backgroundColor ='#42f47a';
    }
    else{
      document.getElementById("cText").style.backgroundColor ='#dbc59b';
    }
  }
  render() {
    const text = this.state.liked ? 'Øvelse valgt' : 'Ikke valgt';
    return (
      <div onClick={this.handleClick}>
        <b id="cText" style={{backgroundColor: '#dbc59b'}}>{text}</b>
      </div>
    );
  }
}

// Knapp til å opprette ny treningsøkt
class NewWorkoutButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    ReactDOM.render(
      <ExerciseChooseListBox url="/api/exercises" pollInterval={2000}/>,
      document.getElementById('content')
    );
  }
  render() {
    const text = "Trykk her for å opprette nytt treningsprogram";
    return (
      <div onClick ={this.handleClick}>
        {text}
      </div>
    );
  }
}
