import styled from "styled-components";

const MenuItem = styled.div`
    color: white;
    opacity: ${props => (props.active ? 1 : 0.7)};
    font-weight: ${props => (props.active ? 500 : 300)};
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 48px;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 1300px) {
        border: 2px solid #fff;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        text-align: center;
        flex-grow: 1;
    }
`;

export default MenuItem;
