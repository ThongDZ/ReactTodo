import React from 'react';
import Detail from '../../component/Detail';
import Delete from '../../component/Delete';



export default function index ({match}) {
    return (
        <div>
        <Delete />
            <Detail id={match.params.id} />
        </div>
    )
}