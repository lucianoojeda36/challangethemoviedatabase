import React from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import './ActorMovies.scss'

// const listData = [];
// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'https://ant.design',
//         title: `ant design part ${i}`,
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         description:
//             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// }

function TimeStamp(time) {

    var fecha = new Date(`${time}`);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };


    return fecha.toLocaleDateString("es-ES", options)



}


const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default function ActorMovies() {

    const users = useSelector((state) => state.dataReducer?.user)

    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={users?.known_for}
            footer={
                <div>
                    <b>ant design</b> footer part
                </div>
            }
            renderItem={item => (
                <List.Item        
                    key={item.id}
                    actions={[
                        <IconText icon={StarOutlined} text={`${item?.vote_average}/10`} key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                        style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
                            width={272}
                            alt="logo"
                            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        />
                    }
                >
                    <List.Item.Meta
                        // avatar={<Avatar src={item.poster_path} />}
                        title={<span >{item?.title}</span>}
                        description={<span >{item?.overview}</span>}
                    />
                    {/* {item.content} */}
                    <span>Fecha de Estreno:{TimeStamp(item.release_date)}</span>
                </List.Item>
            )}
        />
    )

}