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
            return this.items.find(item => item.id === id);
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
            console.log (this.findById(id))
            const currentItem = this.findById(id);
            this.item = this.items.map(function(item){
                if (items.checked === false) {
                    return true;
                }
                return false;
            })
           
        }
        
        function findAndUpdateName(id, newName) {
            try {
                Item.validateName(newName);
                const currentItem = this.findById(id);
                currentItem.name = newName;
                this.items = this.items.map(function(item){
                    if (item.id === id) {
                        return currentItem;
                    }
                    return item;
                 }); 
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