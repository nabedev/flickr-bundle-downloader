"use strict";
var _a;
exports.__esModule = true;
exports.photosReducer = exports.positionChangedAll = exports.positionChanged = exports.deselectedAllPhoto = exports.selectedAllPhoto = exports.togglePhotoSelected = exports.photoAdded = exports.selectAll = exports.selectById = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
// Adapters
var photosAdapter = (0, toolkit_1.createEntityAdapter)();
var initialState = photosAdapter.getInitialState();
exports.selectById = (_a = photosAdapter.getSelectors(function (state) { return state.photos; }), _a.selectById), exports.selectAll = _a.selectAll;
// actions
exports.photoAdded = (0, toolkit_1.createAction)('photos/added');
exports.togglePhotoSelected = (0, toolkit_1.createAction)('photos/toggle');
exports.selectedAllPhoto = (0, toolkit_1.createAction)('photos/selectedAll');
exports.deselectedAllPhoto = (0, toolkit_1.createAction)('photos/deselectedAll');
exports.positionChanged = (0, toolkit_1.createAction)('photos/positionChanged');
exports.positionChangedAll = (0, toolkit_1.createAction)('photos/positionChangedAll');
// Reducers
exports.photosReducer = (0, toolkit_1.createReducer)(initialState, function (builder) {
    builder
        .addCase(exports.photoAdded, function (state, action) {
        photosAdapter.addOne(state, action.payload);
    })
        .addCase(exports.togglePhotoSelected, function (state, action) {
        state.entities[action.payload.id].selected =
            !state.entities[action.payload.id].selected;
    })
        .addCase(exports.selectedAllPhoto, function (state) {
        Object.values(state.entities).forEach(function (entity) {
            entity.selected = true;
        });
    })
        .addCase(exports.deselectedAllPhoto, function (state) {
        Object.values(state.entities).forEach(function (entity) {
            entity.selected = false;
        });
    })
        .addCase(exports.positionChanged, function (state, action) {
        state.entities[action.payload.id].positions = action.payload.positions;
    })
        .addCase(exports.positionChangedAll, function (state, action) {
        Object.values(state.entities).forEach(function (entity) {
            entity.positions = action.payload;
        });
    });
});
