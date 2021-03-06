'use strict';

var React = require('react-native');
var BarLineChartMixin = require('./mixins/BarLineChartMixin.js');

var LineChart = React.createClass({
  name: 'LineChart',
  mixins: [BarLineChartMixin],

  propTypes: {
    /*
     * data is already defined in the BaseChartMixin
     * but we can add properties to it by declaring props in the usual way
     */
    data: React.PropTypes.shape({
      dataSets: React.PropTypes.arrayOf(React.PropTypes.shape({
        /*
         * Draw circle around each data point
         */
        drawCircles: React.PropTypes.bool,

        /*
         * Draw smooth line of best fit
         */
        drawCubic: React.PropTypes.bool,

        /*
         * Pixel width of the line of best fit
         */
        lineWidth: React.PropTypes.number,

        /*
         * Draw shaded area underneath the line
         */
        drawFill: React.PropTypes.bool,

        /*
         * Color of fill underneath chart
         */
        fillColor: React.PropTypes.string,

        /*
         * Alpha value between 0 and 1
         */
        fillAlpha: React.PropTypes.number,
      })),
    }),
  },

  render: function(){
    return (
      <LineChartComponent
        {...this.props}
        onSelect={this._onSelect}
      />
    );
  },

});

var LineChartComponent = React.requireNativeComponent('MPChartLine', LineChart, {
  nativeOnly: {onSelect: true},
});

module.exports = LineChart;
