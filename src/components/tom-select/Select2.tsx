import { useEffect } from 'react'
import TomSelect from 'tom-select'
import { Select2Props } from './type'
import { select2Option } from './option'

const Select2 = <T,>(props: Select2Props<T>) => {
    // const {  } = props

    // init tom-select
    useEffect(() => {
        const instance = new TomSelect(`select#${props.id}`, select2Option(props))
        return () => instance.destroy()
    }, [])

    return <select id={props.id}></select>
}

export default Select2
