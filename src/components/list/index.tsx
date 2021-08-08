import React, {FC, useEffect, useState} from "react";
import ajax from "../../utils/ajax";
import config from "../../config/config";
import ListEntry from "../list-entry";
import boxImage from "./../../assets/images/box.png";
import {TListResponse, TListEntry} from "../../types/alltypes";
import {useLocation} from "react-router-dom";

import "./list.scss";

type TProps = {};
const List: FC<TProps> = () => {
  const {pathname} = useLocation();
  const [list, setList] = useState<TListEntry[] | null>(null);

  useEffect(() => {
    const _fetchList = async () => {
      const data = await ajax.post<TListResponse>(
        `${config.API_BASE}${pathname}`,
        {},
      );

      if (data.status === "OK") {
        setList(data.list);
      }
    };

    _fetchList();
  }, [pathname]);

  console.log(list);

  return (
    <div className="list">
      {list ? (
        list.length == 0 ? (
          <div className="empty">
            <img src={boxImage} width={128} height={128} />
            <h3 className="desc">Nothing here!</h3>
          </div>
        ) : (
          list.map((listEntry) => <ListEntry data={listEntry} />)
        )
      ) : null}
    </div>
  );
};

export default List;
