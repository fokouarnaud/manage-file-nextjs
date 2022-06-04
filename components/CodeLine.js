import React from 'react'

const getHighlightedText = (el, language = "javascript") => {

    return <pre><code className={`language-${language}`}>{`${el}`}</code></pre>;
}

const CodeLine = ({children,numLigne,numLigneExecute}) => {
    return (
        <div>
            <div className="w-full grid  gap-3 grid-cols-12">
                <div className={`col-span-1 ${ numLigne==numLigneExecute && "bg-green-50"}`}>
                    {numLigne==numLigneExecute &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>}

                </div>
                <div className="col-span-1 text-gray-400">{numLigne}</div>
                <div className={`col-span-10  ${ numLigne==numLigneExecute && "bg-slate-100"}`}>
                    {children}
                </div>

            </div>
        </div>
    )
}

export default CodeLine