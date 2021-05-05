import { connect } from 'react-redux';
import ParentComponent from './ParentComponent';

function RootComponent({name}) {
  return (
    <div>
      <h2>Root component name change from child component - {name}</h2>
      <ParentComponent />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)( RootComponent);
