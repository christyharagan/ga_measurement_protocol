const OptionalSettings = {
  ga_id_trait: {
    description: 'The trait containing GA client id (defaults to gaid). Can be found by: ga(function(tracker) {var clientId = tracker.get("clientId");});',
    type: string
  }
}
const RequiredSettings = {
  event_category: {
    description: 'The GA event category',
    type: string
  },
  event_action: {
    description: 'The GA event action',
    type: string
  },
  event_label: {
    description: 'The GA event label',
    type: string
  },
  tracking_id: {
    description: 'The ID that distinguishes to which Google Analytics property to send data.',
    type: string
  }
}

validate(OptionalSettings, RequiredSettings)
