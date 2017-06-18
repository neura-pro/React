export default class Actions {
    static ADD_ITEM = 'ADD_ITEM';
    static TOGGLE_ITEM = 'TOGGLE_ITEM';
    static SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

    static nextItemId = 0;
    static addItem(text) {
        return {
            type: this.ADD_ITEM,
            id: this.nextItemId++,
            text
        }
    }

    static toggleItem(id) {
        return {
            type: this.TOGGLE_ITEM,
            id
        }
    }

    static setVisibilityFilter(filter) {
        return {
            type: this.SET_VISIBILITY_FILTER,
            filter
        }
    }

}