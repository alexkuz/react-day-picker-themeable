import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocaleUtils from './LocaleUtils';

import { ENTER } from './keys';

export default class Caption extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    months: PropTypes.arrayOf(PropTypes.string),
    locale: PropTypes.string,
    localeUtils: PropTypes.object,
    onClick: PropTypes.func,
    styling: PropTypes.func,
  };

  static defaultProps = {
    localeUtils: LocaleUtils,
  };

  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.locale !== this.props.locale ||
      nextProps.styling !== this.props.styling ||
      nextProps.date.getMonth() !== this.props.date.getMonth() ||
      nextProps.date.getFullYear() !== this.props.date.getFullYear()
    );
  }

  handleKeyUp(e) {
    if (e.keyCode === ENTER) {
      this.props.onClick(e);
    }
  }

  render() {
    const { styling, date, months, locale, localeUtils, onClick } = this.props;
    return (
      <div {...styling('caption', date, locale)} role="heading">
        <div onClick={onClick} onKeyUp={this.handleKeyUp}>
          {months
            ? `${months[date.getMonth()]} ${date.getFullYear()}`
            : localeUtils.formatMonthTitle(date, locale)}
        </div>
      </div>
    );
  }
}
