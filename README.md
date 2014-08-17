Date Pikinator
==============

A React input component for picking dates. Leverages the Pikaday control to create the calendar pop-up.

Example
-------

Also see demo.js

```javascript
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
```

Features
--------

- Pops up a nice calendar picker, with its own modular styles.
- Appends 'invalid' to the input class if value isn't a recognized date.
- Provides access to underlying input control through refs.
- onChange event fires whenever when a date value is selected (either by typing and blurring, or picking a date on the calendar).
- Set an initial value through the defaultValue prop.
