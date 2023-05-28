/** @type {import('next').NextConfig} */
const nextConfig = {}

import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { spawn } from 'child_process'

module.exports = phase => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    spawn('cp', ['-a', 'public', 'out/'])
  }
  return {}
}
