
// Schema constants
export const DEFAULT_SCHEMA = {
  _id: null,
  label: '',
  label_plural: '',
  identifier: '',
  identifier_plural: '',
  attributes: [
    {
      order: 0,
      label: 'Label',
      identifier: 'label',
      help: '',
      required: true,
      unique: true,
      datatype: 'TEXT',
      datatypeOptions: {}
    }
  ],
  display: {
    icon: 'fa-square-o',
    navbar_link: true
  }
}

export const RELATION_TYPES = [
  // { id: 'HAS_ONE', text: 'Has One', desc: 'one to one' },
  // { id: 'BELONGS_TO', text: 'Belongs To', desc: 'many to one' },
  // { id: 'HAS_MANY', text: 'Has Many', desc: 'one to many' },
  // { id: 'HAS_AND_BELONGS_TO_MANY', text: 'Many to Many', desc: 'many to many' }
  // // // //
  // { id: 'HAS_MANY', text: 'Has Many', desc: 'one to many description here...' },
  // { id: 'BELONGS_TO', text: 'Belongs To', desc: 'one to many description here...' }
  // // // //
  { id: 'ONE_TO_ONE', text: 'One to One', desc: 'One to One description here...' },
  { id: 'ONE_TO_MANY', text: 'One to Many', desc: 'One to Many description here...' },
  { id: 'MANY_TO_ONE', text: 'Many to One', desc: 'Many to One description here...' },
  { id: 'MANY_TO_MANY', text: 'Many to Many', desc: 'Many to Many description here...' }
]

export const DATATYPES = [
  { value: 'TEXT', text: 'Text', icon: 'fa-quote-left' },
  { value: 'NUMBER', text: 'Number', icon: 'fa-hashtag' },
  { value: 'BOOL', text: 'Boolean', icon: 'fa-check-square-o' },
  { value: 'DATE', text: 'Date', icon: 'fa-calendar-o' },
  { value: 'TIME', text: 'Time', icon: 'fa-clock-o' },
  { value: 'DATETIME', text: 'Datetime', icon: 'fa-calendar-plus-o' },
  { value: 'COLOR', text: 'Color', icon: 'fa-eyedropper' },
  { value: 'JSON', text: 'JSON', icon: 'fa-code' },
  // { value: 'GEO', text: 'Geolocation', icon: 'fa-map' },
  { value: 'RELATION', text: 'Relation', icon: 'fa-link' }
]

// <!-- <optgroup label="Basics"> -->
//   <!-- <option value='RANGE'>Range</option> -->
//   <!-- <option value='PASSWORD'>Password</option> -->
//   <!-- <option value='URL'>URL</option> -->
// <!-- </optgroup> -->
// <!-- <optgroup label="Masked"> -->
//   <!-- <option value='PHONE_NUMBER'>Phone Number</option> -->
//   <!-- <option value='EMAIL'>Phone Number</option> -->
//   <!-- <option value='CURRENCY_USD'>Currency (USD)</option> -->
// <!-- </optgroup> -->
// <!-- <optgroup label="Dropdowns"> -->
//   <!-- <option value='TEXT_SELECT'>Text Dropdown</option> -->
//   <!-- <option value='NUMBER_SELECT'>Number Dropdown</option> -->
//   <!-- <option value='TEXT_SELECT_MULTI'>Text Multi Dropdown</option> -->
//   <!-- <option value='NUMBER_SELECT_MULTI'>Number Multi Dropdown</option> -->
// <!-- </optgroup> -->
