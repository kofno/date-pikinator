React = require 'react/addons'
Pikaday = require 'pikaday'

{ input } = React.DOM

cx = React.addons.classSet

module.exports = React.createClass
  getInitialState: ->
    value: @formatAsDate()

  componentDidMount: ->
    @picker = new Pikaday
      field: @getDOMNode()
      format: 'L'

  handleChange: (event) ->
    @setState
      value: event.target.value

  handleBlur: (event) ->
    @setState
      value: @formatAsDate event.target.value

  formatAsDate: (candidate) ->
    if candidate?
      if @isValid(candidate)
        new Date(candidate).toLocaleDateString()
      else
        candidate
    else
      new Date().toLocaleDateString()

  isValid: (dateish) ->
    date = new Date(dateish)
    !isNaN(date.getTime())

  render: ->
    classes = cx
      invalid: !@isValid(@state.value)
    (input
      type: 'date'
      onChange: @handleChange
      value: @state.value
      className: classes
    , [])


