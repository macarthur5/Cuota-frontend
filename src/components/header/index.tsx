import React, {FC} from "react";
import {useHistory, useLocation} from "react-router-dom";
import BackIcon from "../../assets/svg-components/BackIcon";
import ForwardIcon from "../../assets/svg-components/ForwardIcon";
import Breadcrumbs from "../breadcrumbs";

import "./header.scss";

type TProps = {};
const Header: FC<TProps> = () => {
  const history = useHistory();

  const _onBackIconClick = () => {
    history.goBack();
  };

  const _onForwardIconClick = () => {
    history.goForward();
  };

  return (
    <header className="header">
      <BackIcon className="back-icon" onClick={_onBackIconClick} />
      <ForwardIcon className="forward-icon" onClick={_onForwardIconClick} />
      <Breadcrumbs />
    </header>
  );
};

export default Header;
