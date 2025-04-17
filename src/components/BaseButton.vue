<script setup lang="ts">
import { computed } from 'vue'

/* ── Props ───────────────────────────────────────────────────────── */
const props = defineProps<{

  width?: number | string
  height?: number | string

  /** Padding top/right/bottom/left.  Number = px, string = any CSS length. */
  pt?: number | string
  pr?: number | string
  pb?: number | string
  pl?: number | string

  /** Horizontal gap between icon / prefix / suffix and text (px). */
  gap?: number

  /** Background colour in Tailwind token (e.g. "serenityBlue") or hex (#xxx). */
  bg?: string
  /** Text colour token or hex */
  color?: string

  /** Rounded radius (Tailwind token eg. "md" or px/%)  */
  rounded?: string | number

  /** Extra Tailwind classes to merge */
  class?: string

  /** Native button type attribute */
  type?: 'button' | 'submit' | 'reset'

  /** Disabled state */
  disabled?: boolean
}>()


const w = computed(() => props.width ?? '178px')
const h = computed(() => props.height ?? '56px')
const gap = computed(() => props.gap ?? 10)

const pt = computed(() => props.pt ?? 16)
const pr = computed(() => props.pr ?? 24)
const pb = computed(() => props.pb ?? 16)
const pl = computed(() => props.pl ?? 24)

const bg = computed(() => props.bg ?? 'bg-serenityBlue')
/* If user passes a raw hex starting with #, convert to inline style */
const bgClass = computed(() =>
  bg.value.startsWith('#') ? '' : bg.value
)
const bgStyle = computed(() =>
  bg.value.startsWith('#') ? { background: bg.value } : {}
)

const txt = computed(() => props.color ?? 'text-white')

const rounded = computed(() =>
  typeof props.rounded === 'number'
    ? `rounded-[${props.rounded}px]`
    : props.rounded
    ? `rounded-${props.rounded}`
    : 'rounded'
)

/* inline width/height style for arbitrary pixel values */
const sizeStyle = computed(() => ({
  width: typeof w.value === 'number' ? `${w.value}px` : w.value,
  height: typeof h.value === 'number' ? `${h.value}px` : h.value,
  gap: `${gap.value}px`,
  paddingTop: typeof pt.value === 'number' ? `${pt.value}px` : pt.value,
  paddingRight: typeof pr.value === 'number' ? `${pr.value}px` : pr.value,
  paddingBottom: typeof pb.value === 'number' ? `${pb.value}px` : pb.value,
  paddingLeft: typeof pl.value === 'number' ? `${pl.value}px` : pl.value,
  ...bgStyle.value,
}))
</script>

<template>
  <button
    :type="props.type ?? 'button'"
    :disabled="props.disabled"
    :style="sizeStyle"
    :class="[
      'inline-flex items-center justify-center font-switzer font-light text-[20px] leading-[120%] tracking-normal transition-colors',
      bgClass,
      txt,
      rounded,
      props.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90',
      props.class,
    ]"
  >
    <!-- default slot allows icons / text -->
    <slot />
  </button>
</template>
