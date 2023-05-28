/** @type {import('next').NextConfig} */
const nextConfig = {}

const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = phase => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    const { spawn } = require('child_process')
    spawn('cp', ['-a', 'public', 'out/'])
  }
  return {}
}
