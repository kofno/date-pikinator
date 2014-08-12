Date Pikinator
==============

A React input component for picking dates. Leverages the Pikaday control to create the calendar pop-up.

Example
-------

```javascript
var React = require('react'),
    DatePicker = require('date-pikinator')
    ;

React.renderComponent(
  DatePicker({}),
  document.body
);
```

Features
--------

Um... not much yet

- Pops up a nice calendar picker, with its own modular styles.
- Appends 'invalid' to the input class if value isn't a recognized date.
