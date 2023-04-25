import { useMemo } from 'react'
import Select2 from './components/tom-select/Select2'

function App() {
    const options = useMemo(
        () => [
            { label: 'Afghanistan', value: 'AF' },
            { label: 'Åland Islands', value: 'AX' },
            { label: 'Albania', value: 'AL' },
            { label: 'Algeria', value: 'DZ' },
            { label: 'American Samoa', value: 'AS' },
            { label: 'AndorrA', value: 'AD' },
            { label: 'Angola', value: 'AO' },
            { label: 'Anguilla', value: 'AI' }
        ],
        []
    )

    return (
        <main className="flex justify-center">
            <div className="w-2/6 pt-10">
                <Select2
                    id="select2"
                    options={options}
                    defaultOption="AX"
                    labelField="label"
                    onChange={(v) => console.log(v)}
                    render={{
                        item: (data, escape) => {
                            return <div className=" text-red-400">{escape(data.label)}</div>
                        },
                        option: (data, escape) => {
                            return <div className="hover:bg-gray-300">{escape(data.label)}</div>
                        },
                        dropdown: () => {
                            return <div className="bg-red-300"></div>
                        }
                    }}
                />
            </div>
        </main>
    )
}

export default App
