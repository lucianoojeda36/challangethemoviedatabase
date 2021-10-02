import React from "react";
import { List } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Divider } from "antd";
import "./ActorMovies.scss";

function TimeStamp(time) {
  var fecha = new Date(`${time}`);
  var options = { year: "numeric", month: "long", day: "numeric" };

  return fecha.toLocaleDateString("es-ES", options);
}

export default function ActorMovies() {
  const users = useSelector((state) => state.dataReducer?.user);

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
            }}
          >
            Pelicuals:
          </h1>
        </div>
      }
      renderItem={(item) => (
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
                  {item?.overview}
                </span>
              }
            />
            <span className="timestamps">
              Fecha de Estreno:{TimeStamp(item.release_date)}
            </span>
          </List.Item>
          <Divider style={{ background: "black", opacity: "0.2" }} />
        </div>
      )}
    />
  );
}
