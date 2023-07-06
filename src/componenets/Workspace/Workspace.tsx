import React from 'react';
import {useState} from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';
import Confetti from 'react-confetti';
import useWindowSize from '@/hooks/useWindowsSize';
type WorkspaceProps = {
    problem:Problem
};

const Workspace:React.FC<WorkspaceProps> = ({problem}) => {
    const {width, height} = useWindowSize();
    const [successs,setSuccess] = useState(false)
    const [solved,setSolved] = useState(false)

    return <Split className='split' minSize={0}>
        <ProblemDescription problem={problem} _solved= {solved}></ProblemDescription>
        <div className='bg-dark-fill-2'>
            <Playground problem={problem} setSuccess = {setSuccess} setSolved={setSolved}></Playground>
            {successs && <Confetti
                gravity={0.3}
                tweenDuration={4000} width={width-1} height={height-1}></Confetti>}
        </div>        

    </Split>
}
export default Workspace;