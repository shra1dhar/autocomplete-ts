import React, { Component } from 'react';
import Suggestion from './Utils/Suggestion';
import './style';

interface Props {
  text?: string;
  disabled?: boolean;
  placeholder?: string;
  suggestText?: string;
  suggestList?: any[];
  [key: string]: any;
}

interface State {
  inputStr: string;
  suggestStr: string;
}

export class AutoComplete extends Component<Props, State> {
  private suggestion: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      inputStr: this.props.text || '',
      suggestStr: this.props.suggestText || '',
    }
  }

  componentDidMount() {
    const suggestionList = this.props.suggestList || [];
    if (suggestionList.length)
      this.suggestion = new Suggestion(suggestionList);
  }

  handleSuggestion = () => {
    let suggestion: string;
    const { inputStr } = this.state;
    const { text, suggestText } = this.props;
    const isUserControlling = !!(text && suggestText);

    if (inputStr === '') {
      suggestion = '';
    } else if (isUserControlling) {
      suggestion = suggestText || '';
    } else {
      let suggestedList = this.suggestion.completeSearch(inputStr);
      suggestion = suggestedList.length ? suggestedList[0] : '';

      let sliceIndex = inputStr.length;
      suggestion = `${inputStr}${suggestion.substring(sliceIndex)}`;
    }
    this.setState({ suggestStr: suggestion });
  }

  handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    this.setState({
      inputStr: value
    }, () => this.handleSuggestion());
  }

  handleKeyPress = (e: React.KeyboardEvent) => {
    const tabKey = 9;
    const { inputStr, suggestStr } = this.state;
    const { suggestText } = this.props;
    const isSuggestionActive = (suggestStr.length > inputStr.length) ||
                              ((suggestText?.length || 0) > (inputStr?.length || 0));
    if ((e.which === tabKey) && isSuggestionActive) {
      this.setState({ inputStr: suggestStr });
      e.preventDefault();
    }
  }

  render() {
    const { inputStr, suggestStr } = this.state;
    const { text, suggestText, suggestList, ...restProps } = this.props;
    const ariaLabel = this.props.placeholder;
    return (
      <div className="autocomplete--fill-input">
        <input
          readOnly
          tabIndex={-1}
          autoComplete="off"
          aria-readonly="true"
          value={suggestText || suggestStr}
          className="autocomplete--input-suggestion"
        />
        <input
          value={inputStr}
          autoComplete="off"
          aria-haspopup="false"
          aria-label={ariaLabel}
          aria-autocomplete="inline"
          onKeyDown={this.handleKeyPress}
          onChange={this.handleInputChange}
          className="autocomplete--input-active"
          {...restProps}
        />
      </div>
    )
  }
}

export default AutoComplete;
