/* global cuid */
// eslint-disable-next-line no-unused-vars
const store = (function() {
        const items = [
            { id: cuid(), name: 'apples', checked: false },
            { id: cuid(), name: 'oranges', checked: false },
            { id: cuid(), name: 'milk', checked: true },
            { id: cuid(), name: 'bread', checked: false }
        ]
        const hideCheckedItems = false;
        const searchTerm = '';
        
        function findById(id) {
            return store.items.find(item => item.id === id);
        }
        
        function addItem(name) {
            try {
                Item.validateName(name);
                Item.create(name);
                this.items.push({id: cuid(), name, checked: false})
            }
            catch(e) {
                console.log('Cannot add item: ' + e.message);
            }
        }

        function findAndToggleChecked(id) {
            this.findById(id).toggleClass('.checked');
        }
        
        function findAndUpdateName(id, newName) {
            try {
                Item.validateName(newName);
                Item.findById(id);
                this.items.push({id: cuid(), newName, checked: false})
            }
            catch(e) {
                console.log('Cannot update name: ' + e.message);
            }
        }

        function findAndDelete(id) {
            this.items = this.items.filter(item => {
                return item.id !== id;
            });
        }
      
        return {
          items,
          hideCheckedItems,
          searchTerm,
          findAndDelete,
          findAndToggleChecked,
          findAndUpdateName,
          findById,
          addItem,
      }
}());