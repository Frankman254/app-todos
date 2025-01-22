import { TuduCounter } from '../TuduCounter';
import React from 'react';
import { TuduSearch } from '../TuduSearch';
import { TuduList } from '../TuduList';
import { TuduItem } from '../TuduItem';
import { CreateTuduButton } from '../CreateTuduButton';
import { TudusLoading } from '../TudusLoading';
import { TudusError } from '../TudusError';
import { EmptyTudus } from '../EmptyTudus';
import { TuduContex } from '../TuduContex';
import { Modal } from '../Modal';
import { TuduForm } from '../TuduForm'

function AppUI() {
    const { openModal,
        
    } = React.useContext(TuduContex)
    return (
    <>

        <TuduCounter/>
        <TuduSearch/>

    <TuduContex.Consumer>
    {({
            loading,
            error,
            tuduMatch,
            itemComplete,
            itemDelete,
        }) =>(
        <TuduList>
        {loading && <TudusLoading/>}
        {error && <TudusError/>}
        {(!loading && tuduMatch.length === 0) && <EmptyTudus/>}
        {tuduMatch.map(tudu => (
            <TuduItem 
            key={tudu.text} 
            text={tudu.text}
            completed={tudu.completed}
            onComplete ={() => itemComplete(tudu.text)}
            onDelete = {() => itemDelete(tudu.text)}
            />
        ))}
        </TuduList>
        )}        


    </TuduContex.Consumer>


    <CreateTuduButton/>
    {openModal && (
        <Modal >
            <TuduForm/>
        </Modal>
    )}
        



</>
);
}

export {AppUI};