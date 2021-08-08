import React, {FC, useEffect, useState} from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

type TPath = {
  name: string;
  path: string;
};

type TProps = {};
const Breadcrumbs: FC<TProps> = () => {
  const {pathname} = useLocation();
  const [paths, setPaths] = useState<TPath[]>([]);

  useEffect(() => {
    const pathnames = pathname.split("/");
    let pathStr = "";
    const _paths: TPath[] = [{name: "Home", path: pathStr}];

    pathnames.forEach((path) => {
      if (path.trim().length > 0) {
        pathStr += "/" + path;
        console.log(pathStr);
        _paths.push({name: path, path: pathStr});
      }
    });

    setPaths(_paths);
  }, [pathname]);

  const _getNameTxt = (name: string) => {
    return name.length <= 14 ? name : name.substring(0, 11) + "...";
  };

  return (
    <div className="bread-crumbs">
      {paths.map((path, index) =>
        index + 1 === paths.length ? (
          <span className="crumb last">{_getNameTxt(path.name)}</span>
        ) : (
          <Link to={path.path} className="crumb">
            {_getNameTxt(path.name)}
          </Link>
        ),
      )}
    </div>
  );
};

export default Breadcrumbs;
