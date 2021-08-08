import React, {FC} from "react";
import FileIcon from "./../../assets/svg-components/FileIcon";
import FolderIcon from "./../../assets/svg-components/FolderIcon";
import {TListEntry} from "../../types/alltypes";
import {Link} from "react-router-dom";

import "./list-entry.scss";

type TProps = {
  data: TListEntry;
};

const ListEntry: FC<TProps> = ({data}) => {
  const {name, path, isFile} = data;

  return (
    <Link to={path} className="entry">
      {isFile ? <FileIcon className="icon" /> : <FolderIcon className="icon" />}
      <p className="name">{name}</p>
    </Link>
  );
};

export default ListEntry;
