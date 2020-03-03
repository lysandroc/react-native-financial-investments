// import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

// these sagas always accept an action
function* move(action) {
	const { direction } = action;
	// do interesting things
}

// they're always the last parameter
function* jump(action) {}

export default all([
	takeLatest('MOVE', move), // actions are implicitly passed
	takeLatest('JUMP', jump), // even if you don't want them
	// takeEvery('SEARCH', search, api), // here we're passing a custom param
]);
