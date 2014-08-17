var React = require('react/addons'),
    Pikaday = require('pikaday'),
    input = React.DOM.input
    ;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      value: this.formatAsDate(this.props.defaultValue)
    }
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
    var candidate = event.target.value;
    event.value = new Date(candidate);
    event.isValid = this.isValid(candidate);
    this.props.onChange(event);

    this.handleChange(event);

    return true;
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
      onBlur: this.handleBlur,
      value: this.state.value,
      className: classes,
      ref: this.props.ref
    }, []);
  }
});
