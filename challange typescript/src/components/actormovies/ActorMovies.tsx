import React from "react";
import { List } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Divider } from "antd";
import "./ActorMovies.scss";

interface dataUser {
  known_for: any[];
  [x: string]: any;
}

interface dataItem {
  id: any;
  title: String;
  overview: String;
  vote_average: Number;
  poster_path: String;
  release_date: Date;
}

function TimeStamp(time: Date) {
  var fecha = new Date(`${time}`);

  return fecha.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ActorMovies() {
  const users = useSelector((state: dataUser) => state.dataReducer?.user);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={users?.known_for}
      header={
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontWeight: "bold",
              fontSize: "40px",
              marginLeft: "65px",
            }}
          >
            Pelicuals:
          </h1>
        </div>
      }
      renderItem={(item: dataItem) => (
        <div>
          <div className="text-content">
            <h1 className="text-title">{item?.title}</h1>
            <div className="text-icon">
              <span>{item?.vote_average}/10</span>
              <StarFilled style={{ fontSize: "16px", color: "#D4AC0D" }} />
            </div>
          </div>

          <List.Item
            key={item.id}
            extra={
              <img
                width={100}
                alt="logo"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              />
            }
          >
            <List.Item.Meta
              description={
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    textAlign: "left",
                  }}
                >
                  {item?.overview ? (
                    item?.overview
                  ) : (
                    <span>without overview</span>
                  )}
                </span>
              }
            />
            <span className="timestamps">
              Fecha de Estreno:
              {TimeStamp(item.release_date) ? (
                TimeStamp(item.release_date)
              ) : (
                <span>without release date</span>
              )}
            </span>
          </List.Item>
          <Divider style={{ background: "black", opacity: "0.2" }} />
        </div>
      )}
    />
  );
}
