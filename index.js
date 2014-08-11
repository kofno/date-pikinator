var React = require('react/addons'),
    Pikaday = require('pikaday'),
    input = React.DOM.input
    ;

module.exports = React.createClass({
  getInitialState: function() {
    return { value: this.formatAsDate() }
  },

  componentDidMount: function() {
    this.picker = new Pikaday({
      field: this.getDOMNode(),
      format: 'L'
    });
  },

  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  handleBlur: function(event) {
    this.setState({
      value: this.formatAsDate(event.target.value)
    });
  },

  formatAsDate: function(candidate) {
    if (candidate != null) {
      if (this.isValid(candidate)) {
        return new Date(candidate).toLocaleDateString();
      }
      else {
        return candidate;
      }
    }
    else {
      return new Date().toLocaleDateString();
    }
  },

  isValid: function(dateish) {
    var date = new Date(dateish);
    return !isNaN(date.getTime());
  },

  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      invalid: !this.isValid(this.state.value)
    });
    return input({
      type: 'date',
      onChange: this.handleChange,
      value: this.state.value,
      className: classes
    }, []);
  }
});
