
/*
*  Posts
*/

var tagline = {
  propertyName: 'tagline',
  propertySchema: {
    type: String,
    optional: false,
    label: "Tagline",
    editable: true,
    autoform: {
      editable: true
    }
  }
}
addToPostSchema.push(tagline);


/*
*  Settings
*/

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
