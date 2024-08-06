/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import VgGuess from '@/components/vg-guess.vue'

import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    VgGuess: typeof VgGuess
  }
}

export type VgGuessInstance = InstanceType<typeof VgGuess>
