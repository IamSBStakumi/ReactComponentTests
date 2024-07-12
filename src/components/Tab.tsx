import { ReactElement } from "react";
import styled, { css } from "styled-components";

const Ul = styled.ul`
  display: flex;
  padding-left: 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;

  & > li {
    position: relative;
    display: block;
    float: left;
    margin-bottom: -1px;
  }
`;

const Li = styled.li<{ $isActive: boolean }>`
  > button {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-right: 2px;
    line-height: 1.4286;
    color: #555;
    text-decoration: none;
    background-color: #eee;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;

    & :hover :active {
      outline: 0;
    }
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      > button {
        color: #337ab7;
        cursor: default;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-color: transparent;
      }
    `}
`;

const Tab = ({
  children,
  active,
  tabNames,
  setActive,
}: {
  children: ReactElement;
  active: number;
  tabNames: string[];
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      <Ul>
        {tabNames.map((tabName, index) => (
          <Li key={index} $isActive={index === active}>
            <button
              type="button"
              role="tab"
              onClick={() => {
                setActive(() => (active === index ? active : index));
              }}
            >
              {tabName}
            </button>
          </Li>
        ))}
      </Ul>
      {children}
    </div>
  );
};

export default Tab;
