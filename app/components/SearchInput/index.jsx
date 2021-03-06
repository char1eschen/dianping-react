import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class SearchInput extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state={
      value: ''
    }
  }

  render(){
    return(
      <input 
        type="text"
        className="search-input"
        placeholder="Search Restaurants..."
        value={this.state.value}
        onChange={this.changeHandle.bind(this)}
        onKeyUp={this.keyUpHandle.bind(this)}
      />
    )
  }
  componentDidMount(){
    this.setState({
      value: this.props.value || ''
    })
  }

  changeHandle(e){
    var val = e.target.value
    this.setState({
      value: val
    })
  }
  keyUpHandle(e){
    if(e.keyCode !== 13){
      return
    }
    this.props.enterHandle(this.state.value)
  } 
}

export default SearchInput 
