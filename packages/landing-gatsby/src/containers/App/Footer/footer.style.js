import styled from 'styled-components';
import colors from 'common/src/theme/app/colors';

const FooterWrapper = styled.section`
  padding: 20px 0 15px;
  margin-top: 40px;
  background-color: ${colors.white};
  border-top: 2px solid ${colors.primary};
  @media (max-width: 480px) {
    padding: 60px 0 30px;
  }
  .copyrightClass {
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .copyrightMenu {
      @media (max-width: 1024px) {
        margin-top: 10px;
        margin-bottom: 10px;
        justify-content: left;
        align-items: left;
        margin-left: 0;
      }
      @media (max-width: 767px) {
        justify-content: left;
        align-items: left;
        margin-left: 0;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    .copyrightText {
      @media (max-width: 1100px) {
        margin-left: 0;
      }
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: ${colors.textColor};
    font-size: 14px;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: ${colors.primary};
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
