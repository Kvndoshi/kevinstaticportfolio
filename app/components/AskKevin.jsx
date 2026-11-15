'use client'

import { useEffect } from 'react'

// Chatty4All inline assistant: an ask bar with suggested questions that opens in place.
// The loader script is added after React has rendered, and renders into #ask-kevin-chat
// (data-target), so React never sees the iframe it inserts.
const SRC = 'https://www.chatty4all.design/widget.js'
const BOT = 'bot_tg5nimy68tgw'

export default function AskKevin() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SRC}"]`)) return
    const s = document.createElement('script')
    s.src = SRC
    s.async = true
    s.setAttribute('data-bot', BOT)
    s.setAttribute('data-target', '#ask-kevin-chat')
    document.body.appendChild(s)
  }, [])

  return (
    <div className="content-section ask-kevin-section">
      <div id="ask-kevin-chat" />
    </div>
  )
}
