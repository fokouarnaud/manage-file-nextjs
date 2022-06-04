import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import CodeLine from './CodeLine';


const getHighlightedText = (el, language = "python") => {

    return <pre><code className={`language-${language}`}>{`${el}`}</code></pre>;
}
const SimuCardIfElse = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const [state, setState] = useState({
        valFeu: "rouge",
        ligneValFeu: 1,
        numLigneExecute: 1,
        numEtape: 1,
        totalEtape: 3
    });

    const handleClickNext=()=>{
        if(state.numLigneExecute==1){
            setState({ ...state, numLigneExecute: 2,numEtape:2 });
        }else if(state.numLigneExecute==2 && state.valFeu!="rouge"){
            setState({ ...state, numLigneExecute: 5,numEtape:3 });
        }else if(state.numLigneExecute==2 && state.valFeu=="rouge"){
            setState({ ...state, ligneValFeu: 1,
        numLigneExecute: 1,
        numEtape: 1, numLigneExecute: 3,numEtape:3  });
        }
    }
    const handleClickPrevious= ()=>{
        if(state.numLigneExecute==2){
            setState({ ...state, numLigneExecute: 1 ,numEtape:1 });
        }else if(state.numLigneExecute==3){
            setState({ ...state, numLigneExecute: 2,numEtape:2 });
        }else if(state.numLigneExecute==5){
            setState({ ...state, numLigneExecute: 2,numEtape:2 });
        }
    }
    const handleChangeValFeu = (e) => {
        e.preventDefault();
        setState({ ...state,
            ligneValFeu: 1,
                numLigneExecute: 1,
                numEtape: 1, numLigneExecute: 1,
            valFeu: e.target.value });

    }

    return (
        <div className="p-5">
            <div>
                <div className=" flex flex-col items-start justify-start space-y-1">
                    <h1 className="text-2xl font-extrabold">Structure alternative</h1>
                    <p className="text-gray-600 font-medium">
                    L'instruction if seule nous indique que si une condition est vraie, un bloc d'instructions sera exécuté et que si la condition est fausse, il ne le sera pas.
                     Mais que se passe-t-il si nous voulons faire quelque chose d'autre si la condition est fausse ?
                    </p>
                    <div className="w-full grid gap-10 xl:grid-cols-3">
                        <div className="col-span-2">
                            <div className="py-8 ">
                                <h4 className="text-sm text-gray-400 pb-3">code</h4>
                                <div className=" text-gray-600  rounded-sm border border-gray-300 p-3  overflow-auto">
                                    <CodeLine numLigne={1} numLigneExecute={state.numLigneExecute}>
                                        {getHighlightedText(`couleur_feu = "${state.valFeu}"`)}
                                    </CodeLine>
                                    <CodeLine  numLigne={2} numLigneExecute={state.numLigneExecute}>
                                        {getHighlightedText(`if(couleur_feu == "rouge"):`)}
                                    </CodeLine>
                                    <CodeLine  numLigne={3} numLigneExecute={state.numLigneExecute}>
                                        {getHighlightedText(`   print("le pieton traverse")`)}
                                    </CodeLine>
                                    <CodeLine  numLigne={4} numLigneExecute={state.numLigneExecute}>
                                        {getHighlightedText(`else:`)}
                                    </CodeLine>
                                    <CodeLine  numLigne={5} numLigneExecute={state.numLigneExecute}>
                                        {getHighlightedText(`   print("le pieton attend")`)}
                                    </CodeLine>
                                 

                                </div>
                                <div className="py-2">
                                    <h4 className="text-sm text-gray-400 pb-3">Modifier variable</h4>
                                    <div className=" text-gray-600  rounded-sm border border-gray-300 p-3 ">
                                        <span className="inline-block mr-2">{getHighlightedText(`couleur_feu =`)}</span>
                                        <input className="inline-block outline-none border-b border-gray-500 p-1"
                                            placeholder={state.valFeu}
                                            value={state.valFeu}
                                            onChange={handleChangeValFeu}
                                        />
                                    </div>

                                </div>
                                <div className="flex flex-row my-4 md:mb-0">
                                    <button  onClick={handleClickPrevious} className={`flex flex-row items-center justify-center  mr-10 ${state.numLigneExecute==1 
                                       ? "text-gray-400":"text-gray-800"}`}>
                                        <i className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                        </i>

                                        <span className="text-base" >Previous</span>
                                    </button>
                                    <span className=" mr-10 text-gray-400"> Step {state.numEtape}/{state.totalEtape} </span>
                                    <button onClick={handleClickNext} className={`flex flex-row-reverse items-center justify-center ${state.numLigneExecute==5 
                                        || state.numLigneExecute==3 ? "text-gray-400":"text-gray-800"} `}>
                                        <i className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </i>
                                        <span className="text-base" >Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <div className=" md:py-8">
                                <h4 className="text-sm text-gray-400 pb-3">Output</h4>
                                <div className=" text-gray-600  rounded-sm border border-gray-300 p-3 ">
                                    {state.numLigneExecute==3 && getHighlightedText(`le pieton traverse`, 'console')}
                                    {state.numLigneExecute==5 && getHighlightedText(`le pieton attend`, 'console')}
                                </div>

                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default SimuCardIfElse;