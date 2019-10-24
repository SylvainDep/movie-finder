import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import axios from 'axios'

import SearchOverview from '../../components/SearchBar/SearchOverview/SearchOverview'

const SearchBarContainer = styled.div`
  position: relative;
  text-align: right;
  padding: 30px 0;
`;

const Input = styled.input`
  width: 500px;
  background-color: transparent;
  border-width: 0 0 2px 0;
  padding: 10px 0 10px 20px;
  color: white;
  font-size: 1em;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6)
  }

  &:focus {
    outline:0;
  }
`;

class SearchBar extends Component {
  state = {
    input: {
      value: '',
      placeholder: 'Search Movie Title...'
    },
    response: {},
    input_focus: false,
  }

  componentDidMount() {
      document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = event => {
      const domNode = ReactDOM.findDOMNode(this);

      if (!domNode || !domNode.contains(event.target)) {
          this.setState({
              input_focus: false
          });
      }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.input.value && (this.state.input.value !== prevState.input.value)) {
      const query = this.state.input.value
      const queryUrl = 'https://api.themoviedb.org/3/search/movie?api_key=11cca63b88560cff38b22e3989781d53&language=en-US&query=' + query + '&page=1&include_adult=false'

      axios.get(queryUrl)
        .then(req => {
          const res = req.data.results

          this.setState({
            ...this.state,
            response: res.slice(0, 5)
          })
        })
    }
  }

  inputChangedHandler = (event) => {
    this.setState({
      input: {value: event.target.value}
    })
  }

  setInputFocus = (event) => {
    this.setState({
      ...this.state,
      input_focus: true
    })
  }

  clearInput = () => {
    this.setState({
      ...this.state,
      input: {
        ...this.state,
        value: ''
      }
    })
  }

  render() {

    return (
      <SearchBarContainer>
        <Input
          onClick={this.setInputFocus}
          placeholder={this.state.input.placeholder}
          onChange={(event) => this.inputChangedHandler(event)} />
        {(this.state.input.value.length > 3 && this.state.input_focus) &&
          <SearchOverview
            list={this.state.response}
            fetchMovie={this.props.fetchMovie}
            clearInput={this.clearInput}
            currentSearch={this.state.input.value} />
        }
      </SearchBarContainer>
    )
  }
}

export default SearchBar
