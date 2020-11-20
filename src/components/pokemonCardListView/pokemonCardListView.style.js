import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const CardListView = styled.div`
.card{
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    padding: 0px 30px;
    .card-media{
        display: flex;
        align-items: center;
        .txt-name{
            margin: 0px 30px;
        }
        img{
            width: 150px;
        }
    }
    .link-danger{
        color: ${colors.red};
        cursor: pointer
    }
}

`