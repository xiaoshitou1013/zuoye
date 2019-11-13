import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component{
  render(){
    let {changeNum} = this.props
    return(
     
        <div>
          <button onClick={()=>changeNum('+')}>+</button>
          <span>{this.props.num}</span>
          <button onClick={()=>changeNum('-')}>-</button>
        </div>
    )
  }
}

IndexPage.propTypes = {
  num: Number
};

// props默认值
IndexPage.defaultProps = {
  num: 100
}

const mapStateToPorps = state=>{
  console.log('state...', state);
  return {
    num: state.num.num
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    changeNum: type=>dispatch({
      type: 'num/changeNum',
      payload: {type}
    })
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(IndexPage);
