
Template.praise_list.helpers({
  settings: function() {
    return {
      collection: Praises.find(),
      rowsPerPage: 30,
      showFilter: true,
      fields: [
        { key: 'name', label: 'Name' },
        { key: 'twitter', label: 'Twitter' },
        { key: 'followers', label: 'Followers', sort: 'descending' },
        { key: 'bio', label: 'Bio' , sortable: false },
        { key: 'location', label: 'Location' },
        { key: 'quote', label: 'Quote', sortable: false },
        { key: 'actions', label: 'Actions', tmpl: Template.praise_list_controls, sortable: false }
      ]
    };
  }
});

Template.praise_list_controls.events({
  'click .edit-link': function () {
    Router.go('praise_edit', {_id: this._id});
  },
  'click .delete-link': function (e) {
    e.preventDefault();
    var c = confirm("\nAre you sure you want to delete that? \n\nThere's no going back!\n");
    if (c == true)
      Praises.remove(this._id);
  }
});
