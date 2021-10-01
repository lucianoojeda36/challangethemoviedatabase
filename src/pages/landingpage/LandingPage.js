import React from 'react';
import ActorMovies from '../../components/actormovies/ActorMovies';
import ActorProfile from '../../components/actorprofile/ActorProfile';
import { Button } from 'antd';
import './LandingPage.scss'
import {
    ArrowLeftOutlined,SearchOutlined
  } from '@ant-design/icons';





export default function LandingPage() {


    return (
        <div className='container-landing' >
            <Button type="primary" icon={<ArrowLeftOutlined/>} href="/" className='container-button'>Regresar</Button>
            <div className='container-pages'>
                <ActorProfile />
                <ActorMovies />
            </div>
        </div>
    )

}