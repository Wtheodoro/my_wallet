import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.div`

`;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    .tag-filter {
        font-size: 1.2rem;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.font};
        margin: 0 .6rem;
        transition: opacity .3s;

        &:hover {
            opacity: .7;
        }
    }

    .tag-filter-recurrent::after,
    .tag-filter-eventual::after {
        content: '';
        display: block;
        width: 3.5rem;
        margin: 0 auto;
    }

    .tag-filter-recurrent::after {
        border-bottom: .6rem solid ${props => props.theme.colors.warning}
    }

    .tag-filter-eventual::after {
        border-bottom: .6rem solid ${props => props.theme.colors.success}
    }
`;