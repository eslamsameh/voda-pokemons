import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const CardGridView = styled.div`
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background: #fff;
    transition: 0.3s;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .card-media{
        width: 100%;
        height: 300px;
        text-align: center;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain
        }
    }
    .card-content{
        padding: 10px;

    }
    .txt-name{
        font-size: 22px;
        font-weight: 500;
    }
    .div-specs{
        display: flex;
        justify-content: center;
        button{
            margin: 0px 5px;
            border-radius: 22px;
            background: #fff;
            outline: none;
            padding: 10px 20px;
        }
       
    }
}
.btn-submit-container{
    margin: 20px 0px 5px 0px;
    .btn-primary{
        width: 100%;
        background: ${colors.blue};
        border: 1px solid ${colors.blue};
        color: #fff;
        padding: 11px;
        outline: none;
        text-transform: uppercase;
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
}
.btn-primary-outline{
    border: 1px solid ${colors.blue};
    color: ${colors.blue};
    background: #fff;
}
.btn-danger-outline{
    border: 1px solid ${colors.red};
    color: ${colors.red};
}
.btn-added{
    padding: 11px;
    width: 100%;
    text-transform: uppercase;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
`