var React = require('react'),
    DatePicker = require('./index'),
    div = React.DOM.div
    ;

var App = React.createClass({
  getInitialState: function() {
    var value = new Date();
    return {
      theDate: value.toJSON()
    }
  },

  handleDateChange: function(evt) {
    this.setState({
      theDate: evt.value.toJSON()
    })
  },

  render: function() {
    return div({}, [
      DatePicker({
        onChange: this.handleDateChange,
        ref: 'theWidget',
        defaultValue: this.state.theDate
      }),
      div({}, [this.state.theDate])
    ]);
  }
});

React.renderComponent(
  App({}),
  document.body
);


