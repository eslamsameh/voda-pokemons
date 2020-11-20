import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const HeaderContainer = styled.div`
.header-container{
    background-color: ${colors.blue};
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     color: #fff;
     padding: 1px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4{
        cursor: pointer;
    }
}
.badge{
    position: absolute;
    top: -13px;
    background-color: ${colors.red};
    border-radius: 50%;
    width: 20px;
    text-align: center;
    left: 13px;
}
.relative-div{
    position: relative;
}


`