import { connect } from 'react-redux';
import { nameChange } from '../redux/nameActions';
function ChildComponent({ inputValue, inputChnaged }) {
  return (
    <div>
      <p>Child Component</p>
      <input type="text" value={inputValue} onChange={inputChnaged} placeholder="Enter Your name" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.name,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    inputChnaged: (e) => dispatch(nameChange(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(ChildComponent);
