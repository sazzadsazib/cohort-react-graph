import _classCallCheck from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/cohort-graph-reactjs/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/cohort-graph-reactjs/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/cohort-graph-reactjs/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/cohort-graph-reactjs/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/cohort-graph-reactjs/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import './CohortStyle.css';
var dateOptions = {
  month: 'short',
  day: 'numeric'
};

var CohortComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CohortComponent, _Component);

  function CohortComponent() {
    _classCallCheck(this, CohortComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CohortComponent).apply(this, arguments));
  }

  _createClass(CohortComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      // console.log(this.props.data.length+1);
      return React.createElement("div", {
        className: "container",
        style: {
          textAlign: 'center',
          width: this.props.width
        }
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-block-th",
        style: {
          width: this.props.width / this.props.data.length + 1 - 5
        }
      }, React.createElement("br", null), React.createElement("br", null)), this.props.data.map(function (item, i) {
        return React.createElement("div", {
          className: "col-block-th",
          style: {
            width: _this.props.width / _this.props.data.length + 1 - 5
          },
          key: i
        }, React.createElement("p", {
          className: "day-count"
        }, _this.props.data.length === 7 ? "DAY" : _this.props.data.length === 4 ? "MONTH" : "WEEK", " ", i + 1), React.createElement("p", {
          className: "day-percent"
        }, item.retention, "%"));
      })), this.props.data.map(function (item, i) {
        return React.createElement("div", {
          className: "row",
          key: i
        }, React.createElement("div", {
          className: "col-block-th",
          style: {
            width: _this.props.width / _this.props.data.length + 1 - 5
          }
        }, React.createElement("p", {
          className: "day-count"
        }, new Date(item.date).toLocaleDateString('en', dateOptions)), React.createElement("p", {
          className: "user-count"
        }, item.user > 1000 ? item.user > 1000000 ? React.createElement("span", null, item.user / 1000000, "M") : React.createElement("span", null, item.user / 1000, "K") : item.user, " New Users")), item.data.map(function (item, i) {
          return React.createElement("div", {
            className: "col-block",
            key: i,
            style: {
              width: _this.props.width / _this.props.data.length + 1 - 5,
              background: 'rgba(110, 126, 212, ' + item / 100 + ')'
            }
          }, React.createElement("p", {
            className: "data-count"
          }, item, "%"));
        }));
      }));
    }
  }]);

  return CohortComponent;
}(Component);

export default CohortComponent;