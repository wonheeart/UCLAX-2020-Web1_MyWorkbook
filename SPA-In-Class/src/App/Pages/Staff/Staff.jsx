import React from 'react';
import styled from 'styled-components';

import StaffMember from './StaffMember.jsx';
import { staffData } from './staffData.js';

const Staff = () => {

    const renderMembers = () => {
        return staffData.map((member, idx) => {
            return <StaffMember 
                        key={ idx }
                        member={ member }
                    />;
        });
    }

    return (
        <StaffStyled className='Staff'>
            <div className='members'>
            { renderMembers() }
        </div>
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`
    background-color: teal;

    .members {
        display: flex;
        flex-wrap: wrap;

        justify-content: center;
    }
`;