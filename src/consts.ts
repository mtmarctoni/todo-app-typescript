export const FILTER_VALUE = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const

export const FILTER_BUTTONS = {
    [FILTER_VALUE.ALL]: {
        literal: 'Todos',
        href: `/?filter=${FILTER_VALUE.ALL}`
    },
    [FILTER_VALUE.ACTIVE]: {
        literal: 'Activos',
        href: `/?filter=${FILTER_VALUE.ACTIVE}`
    },
    [FILTER_VALUE.COMPLETED]: {
        literal: 'Completados',
        href: `/?filter=${FILTER_VALUE.COMPLETED}`
    }
} as const