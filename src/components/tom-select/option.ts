import { RecursivePartial, Select2Props, TomSettings, TomTemplates, escape_html } from './type'
import { renderToStaticMarkup } from 'react-dom/server'

export const select2Option = function <T>(props: Select2Props<T>): RecursivePartial<TomSettings> {
    const { options, defaultOption, valueField = 'value', labelField = 'label', searchField, onChange, render } = props

    const _labelField = labelField as string
    const _valueField = valueField as string

    const renderOption: RecursivePartial<TomTemplates> = {}
    for (const key in render) {
        renderOption[key as keyof TomTemplates] = (data: T, escape: typeof escape_html) => {
            return renderToStaticMarkup(render?.[key as keyof typeof render]?.(data, escape) as React.ReactElement)
        }
    }

    console.log(renderOption)

    return {
        plugins: ['dropdown_input'],
        labelField: _labelField,
        valueField: _valueField,
        searchField: searchField ?? [_labelField],
        options: options as RecursivePartial<T>[],
        items: [defaultOption],
        onChange,
        render: renderOption
    }
}
