import React from 'react'

class Control extends React.Component{

  render(){
    //console.log('Control, render...')
    return (
      <div> 
        <button id='btn-start-stop' className='btn' onClick={this.props.onClickStartStop}>
          {this.props.label}
        </button>
        <button id='' classname='btn' onClick={}>
          <<
        </button>
        <button id='' classname='btn' onClick={}>
          >>
        </button>
        <button id='btn-reset' className='btn' onClick={this.props.onClickReset}>
          Reset
        </button>
      </div>
    )
  }
}

export default Control