'use strict';

import React from 'react'
import {
	Navigator
} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/store.js'
import App from './containers/app.js'
const store = configureStore();

class Root extends React.Component {
	render() {
		return (
			<Provider store={ store }>
				<App />
			</Provider>
		);
	}
}
export default Root;

// <Navigator
// 				    initialRoute={{ component: App }}
// 				    configureScene={(route, routeStack) => {
// 				        return Navigator.SceneConfigs.FloatFromRight;
// 				    }}
// 				    renderScene={(route, navigator) => {
// 				    	let Component = route.component;
// 				        return <Component {...route.params} navigator={navigator} />
// 				        //  上面的route.params 是为了方便后续界面间传递参数用的
// 				    }} />