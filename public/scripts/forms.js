// Skjema for å opprette ny treningsøvelse
var ExerciseForm = React.createClass({
  getInitialState: function() {
    return {name: '', groups: '', resistance: ''};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleGroupsChange: function(e) {
    this.setState({groups: e.target.value});
  },
  handleResistanceChange: function(e) {
    this.setState({resistance: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var groups = this.state.groups.trim();
    var resistance = this.state.resistance.trim();
    if (!groups || !name || !resistance) {
      return;
    }
    this.props.onExerciseSubmit({name: name, groups: groups, resistance: resistance});
    this.setState({name: '', groups: '', resistance: ''});
  },
  render: function() {
    return (
      <form className="exerciseForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Navn på øvelse"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          placeholder="Muskelgrupper"
          value={this.state.groups}
          onChange={this.handleGroupsChange}
        />
        <input
          type="text"
          placeholder="Vekt"
          value={this.state.resistance}
          onChange={this.handleResistanceChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
