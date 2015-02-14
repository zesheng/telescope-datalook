/*****************
*  Posts Schema  *
******************/

////// Tagline //////

var tagline = {
  propertyName: 'tagline',
  propertySchema: {
    type: String,
    optional: false,
    label: "Tagline",
    autoform: {
      editable: true
    }
  }
}
addToPostSchema.push(tagline);


////// Location //////

Schema = Schema || {};

Schema.Location = new SimpleSchema({
  name: {
    type: String,
    optional: true,
    label: "Location",
    autoform: {
      editable: true
    }
  },
  latitude: {
    type: String,
    optional: true,
    autoform: {
      editable: true
    }
  },
  longitude: {
    type: String,
    optional: true,
    autoform: {
      editable: true
    }
  }
});

var location = {
  propertyName: 'location',
  propertySchema: {
    type: Schema.Location,
    optional: true,
    autoform: {
      editable: true
    }
  }
}
addToPostSchema.push(location);


// Custom error message for lat/long hidden fields
var locationError = 'Please enter a location so people can find where your project is in the map view.';
var latlongError = 'Please enter a valid location (try selecting one from the dropdown that appears when you type)';

SimpleSchema.messages({
  'required location': locationError,
  'required location.latitude': latlongError,
  'required location.longitude': latlongError
});


/********************
*  Settings Schema  *
********************/

var segment = {
  propertyName: 'segmentKey',
  propertySchema: {
    type: String,
    optional: true,
    label: 'Segment.com key',
    autoform: {
      group: 'integrations'
    }
  }
}
addToSettingsSchema.push(segment);

var googleMaps = {
  propertyName: 'googleMapsAPI',
  propertySchema: {
    type: String,
    optional: true,
    label: 'Google Maps API Key',
    autoform: {
      group: 'integrations'
    }
  }
}
addToSettingsSchema.push(googleMaps);


/********************
*  Praises Schema  *
********************/

praiseSchemaObject = {
  _id: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  name: {
    type: String,
    optional: true,
    label: 'Name',
    autoform: {
      editable: true
    }
  },
  twitter: {
    type: String,
    optional: true,
    label: 'Twitter Name',
    autoform: {
      editable: true
    }
  },
  followers: {
    type: Number,
    optional: true,
    label: 'Twitter Followers',
    autoform: {
      editable: true
    }
  },
  image: {
    type: String,
    optional: true,
    label: 'Image URL',
    autoform: {
      editable: true
    }
  },
  bio: {
    type: String,
    optional: true,
    label: 'Bio',
    autoform: {
      editable: true
    }
  },
  location: {
    type: String,
    optional: true,
    label: 'Location',
    autoform: {
      editable: true
    }
  },
  quote: {
    type: String,
    optional: true,
    label: 'Quote',
    autoform: {
      editable: true
    }
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
};

Praises = new Mongo.Collection("praises");

praiseSchema = new SimpleSchema(praiseSchemaObject);

Praises.attachSchema(praiseSchema);

Meteor.startup(function () {
  Praises.allow({
    insert: isAdminById,
    update: isAdminById,
    remove: isAdminById
  });
});
