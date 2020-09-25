import { usersTraits } from 'segment-typescript-api/cjs/profile_api'

export async function onTrack(event: SegmentTrackEvent, settings: FunctionSettings) {
  if (event.userId) {
    // Do nothing, as we can use the standard approach
  } else if (event.anonymousId) {
    let id = { anonymous_id: event.anonymousId }

    let traits = await usersTraits(settings.profileAccessToken, settings.namespaceId, id, { limit: 100 })
  
    const cid = traits.traits[settings.gaidTrait || 'gaid']
    const gclid = traits.traits[settings.gclidTrait || 'gclid']
    const value = event.event == 'Audience Entered' ? 1 : 0
    await fetch(`https://www.google-analytics.com/collect?v=1&tid=${settings.trackingId}&cid=${cid}&t=event&ec=${settings.eventCategory}&ea=${settings.eventAction}&el=${settings.eventLabel}&ev=${value}&gclid=${gclid}`, {
      method: 'post',
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'User-Agent': 'PostmanRuntime/7.26.5',
        'Cache-Control': 'no-cache'
      }
    })
  } else {
    throw 'Invalid payload: No user identifier found'
  }
}