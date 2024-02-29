'use client'
import { useContext } from 'react'
import { ColorContext } from '../context/color'

export function useColorContext () {
  const context = useContext(ColorContext)

  if (context === undefined) {
    throw new Error('useDrop must be used with a DropProvider')
  }

  return context
}