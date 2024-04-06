import React from 'react';
import PropTypes from 'prop-types';
import styles from './nav.scss';

const nav = props => (
	<div>This is a component called nav.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class nav extends React.Component {
//   render() {
//     return <div>This is a component called nav.</div>;
//   }
// }

const navPropTypes = {
	// always use prop types!
};

nav.propTypes = navPropTypes;

export default nav;
