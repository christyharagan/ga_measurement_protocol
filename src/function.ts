export async function onIdentify(event: SegmentIdentifyEvent, settings: FunctionSettings) {
  const cid = event.traits[settings.gaidTrait || 'gaid']
  const gclid = event.traits[settings.gclidTrait || 'gclid']
  await fetch(`https://www.google-analytics.com/collect?v=1&tid=${settings.trackingId}&cid=${cid}&t=event&ec=${settings.eventCategory}&ea=${settings.eventAction}&el=${settings.eventLabel}&gclid=${gclid}`, {
    method: 'post'
  })
}