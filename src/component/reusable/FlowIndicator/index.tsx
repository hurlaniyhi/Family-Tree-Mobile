import React from 'react'
import { FlowView, FlowCircle } from '@styles';


export const FlowIndicator: React.FC<{pageNumber: number}> = ({ pageNumber }) => {
    return (
        <FlowView>
            {
                [...Array(5).keys()].map(item => {
                    if(pageNumber === item) 
                        return <FlowCircle key={item} flowCircleSize="10" flowCircleColor="#FF007C" />
                    else return <FlowCircle key={item} />
                })
            }
        </FlowView>
    );
}