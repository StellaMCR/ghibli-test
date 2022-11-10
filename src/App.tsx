import * as React from 'react'
import DirectorsPage from './views/directors'
import MoviesPage from './views/movies'

export default function App() {
    const [bla, setBla] = React.useState()
    return (
        <>
            <MoviesPage />
            <DirectorsPage />
        </>
    )
}
