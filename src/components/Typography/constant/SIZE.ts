export const SIZE_VARIANT = {
  // Display
  DISPLAY_XL: { className: 'text-[38px] sm:text-[48px] leading-[120%] font-bold', tag: 'h1' },
  DISPLAY_LG: { className: 'text-[32px] md:text-[42px] leading-[130%] font-semibold', tag: 'h2' },
  DISPLAY_MD: { className: 'text-[26px] md:text-[36px] leading-[140%] font-semibold', tag: 'h3' },
  DISPLAY_SM: { className: 'text-[20px] md:text-[30px] leading-[150%] font-semibold', tag: 'h4' },

  // Title
  TITLE_XL: { className: 'text-[26px] leading-[150%] font-medium', tag: 'h5' },
  TITLE_LG: { className: 'text-[22px] leading-[150%] font-medium', tag: 'h5' },
  TITLE_MD: { className: 'text-[20px] leading-[160%] font-medium', tag: 'h6' },
  TITLE_SM: { className: 'text-[16px] leading-[180%] font-medium', tag: 'p' },
  TITLE_XS: { className: 'text-[14px] leading-[190%] font-medium', tag: 'p' },

  // Subtitle
  SUBTITLE_LG: { className: 'text-[20px] leading-[160%] font-normal', tag: 'p' },
  SUBTITLE_MD: { className: 'text-[18px] leading-[170%] font-normal', tag: 'p' },
  SUBTITLE_SM: { className: 'text-[16px] leading-[180%] font-normal', tag: 'p' },

  // Body
  BODY_LG_NORMAL: { className: 'text-[20px] leading-[160%] font-normal', tag: 'p' },
  BODY_MD_NORMAL: { className: 'text-[18px] leading-[170%] font-normal', tag: 'p' },
  BODY_SM_NORMAL: { className: 'text-[16px] leading-[180%] font-normal', tag: 'p' },
  BODY_LG_BOLDEST: { className: 'text-[20px] leading-[160%] font-medium', tag: 'p' },
  BODY_MD_BOLDEST: { className: 'text-[18px] leading-[170%] font-medium', tag: 'p' },
  BODY_SM_BOLDEST: { className: 'text-[16px] leading-[180%] font-medium', tag: 'p' },

  // Label
  LABEL_LG_NORMAL: { className: 'text-[20px] leading-[160%] font-normal', tag: 'label' },
  LABEL_MD_NORMAL: { className: 'text-[18px] leading-[170%] font-normal', tag: 'label' },
  LABEL_SM_NORMAL: { className: 'text-[16px] leading-[180%] font-normal', tag: 'label' },
  LABEL_LG_BOLDEST: { className: 'text-[20px] leading-[160%] font-medium', tag: 'label' },
  LABEL_MD_BOLDEST: { className: 'text-[18px] leading-[170%] font-medium', tag: 'label' },
  LABEL_SM_BOLDEST: { className: 'text-[16px] leading-[180%] font-medium', tag: 'label' },

  // Helper Text
  HELPER_TEXT_LG: { className: 'text-[18px] leading-[170%] font-normal', tag: 'span' },
  HELPER_TEXT_MD: { className: 'text-[16px] leading-[180%] font-normal', tag: 'span' },
  HELPER_TEXT_SM: { className: 'text-[14px] leading-[190%] font-normal', tag: 'span' },
  TABLE_HEADER: { className: 'text-[18px] font-semibold uppercase tracking-[0.1em]', tag: 'th' }
} as const

export type SizeVariant = keyof typeof SIZE_VARIANT
