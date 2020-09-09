export async function onIdentify(event: SegmentIdentifyEvent, settings: FunctionSettings) {
  const cid = event.traits[settings.ga_id_trait || 'gaid']
  await fetch(`https://www.google-analytics.com/collect?v=1&tid=${settings.tracking_id}&cid=${cid}&t=event&ec=${settings.event_category}&ea=${settings.event_action}&el=${settings.event_label}`, {
    method: 'post'
  })
}
