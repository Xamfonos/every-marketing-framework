'use client'

export default function BackgroundEffects() {
  return (
    <>
      {/* Animated Grid */}
      <div className="pointer-events-none fixed left-0 top-0 z-0 h-full w-full animate-grid-move bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />

      {/* Gradient Orbs */}
      <div className="pointer-events-none fixed -right-52 -top-52 z-0 h-[600px] w-[600px] animate-float rounded-full bg-primary opacity-15 blur-[80px]" />
      <div className="pointer-events-none fixed -bottom-40 -left-40 z-0 h-[500px] w-[500px] animate-float-reverse rounded-full bg-accent opacity-15 blur-[80px]" />
    </>
  )
}
