import { put } from 'redux-saga/effects'
import MarkerActions from '../Redux/MarkerRedux'
import * as firebase from 'firebase'

export function* getMarkers() {
    try {
        let promise = yield firebase.database().ref('markers').once('value');
        markers = promise.val()
        yield put(MarkerActions.markersSuccess(markers))
    } catch (error) {
        yield put(MarkerActions.markersFailure(error))
    }

}
