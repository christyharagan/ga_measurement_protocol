const OptionalSettings = {
  gaidTrait: {
    description: 'The trait containing GA client id (defaults to gaid). Can be found by: ga(function(tracker) {var clientId = tracker.get("clientId");});',
    type: string
  },
  gclidTrait: {
    description: 'The trait containing GCLID (defaults to gclid).',
    type: string
  }
}
const RequiredSettings = {
  eventCategory: {
    description: 'The GA event category',
    type: string
  },
  eventAction: {
    description: 'The GA event action',
    type: string
  },
  eventLabel: {
    description: 'The GA event label',
    type: string
  },
  trackingId: {
    description: 'The ID that distinguishes to which Google Analytics property to send data.',
    type: string
  },
  profileAccessToken: {
    description: 'The profile API access token',
    type: string
  },
  namespaceId: {
    description: 'The namespace ID of the space to read traits from',
    type: string
  }
}

validate(OptionalSettings, RequiredSettings)
