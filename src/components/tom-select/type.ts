import { RecursivePartial, TomTemplates } from 'tom-select/dist/types/types'
import { escape_html } from 'tom-select/dist/types/utils'

export type RenderOptionsType<T> = (data: T, escape: typeof escape_html) => React.ReactNode

type RenderType<T> = {
    option?: RenderOptionsType<T>
    item?: RenderOptionsType<T>
    dropdown?: () => React.ReactNode
    // optgroup_header: TomTemplate
    // option_create: TomTemplate
    // no_results: TomTemplate
    // loading: TomTemplate
    // not_loading: TomTemplateNull
    // loading_more: TomTemplateNull
    // no_more_results: TomTemplateNull
}

export type Select2Props<T> = {
    options: T[]
    defaultOption?: string
    valueField?: keyof T
    labelField?: keyof T
    searchField?: string[]
    sortField?: string
    onChange?: (value: T) => void
    renderOption?: RecursivePartial<TomTemplates>
    render?: RenderType<T>
} & React.HTMLProps<HTMLSelectElement>

export type { RecursivePartial, TomSettings, TomOption, TomTemplates } from 'tom-select/dist/types/types'
export { escape_html } from 'tom-select/dist/types/utils'
