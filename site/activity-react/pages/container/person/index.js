import * as React from 'react';
import './style.scss'

import api from '../../../utils/api';


export default class Team extends React.Component{
    componentDidMount = async() => {
        console.log(INIT_DATA);
    }

    starHandle = async (id) => {
        const result = await api('/api/base/sys-time', {
            method: 'GET',
            body: {}
        })
        if(result) {
            const teamList = this.state.teamList
            teamList.map((item) => {
                if(item.id == id) {
                    item.marked = !item.marked
                }
            })
            this.setState({
                teamList: teamList
            })
        }
    }

    state = {
        personInfo: {
            id: 1,
            name: '阿鲁巴大将军',
            headImg: 'https://img.qlchat.com/qlLive/userHeadImg/9IR4O7M9-ZY58-7UH8-1502271900709-F8RSGA8V42XY.jpg@132h_132w_1e_1c_2o',
            phone: '17728282828',
            mail: 'ada@qq.com',
        }
    }

    headImgInputHandle = (e) => {
        this.setState({
            personInfo: {
                ...this.state.personInfo,
                headImg: e.target.value
            }
        })
    }
    
    render() {
        let personInfo = this.state.personInfo
        return (
            <div className="person-edit-page">
                <div className="title">个人设置</div>

                <div className="head-edit">
                    <div className="left">
                        <img src={personInfo.headImg} className='head-img' />
                    </div>
                    <div className="right">
                        <input type="text" className="head-img-url" value={personInfo.headImg} onChange={this.headImgInputHandle}/>
                        <div className="head-des">请输入头像图片URL地址</div>
                    </div>
                </div>

                <div className="edit-con">
                    <div className="before">名字</div>
                    <input type="text" className="input-edit" value={personInfo.name}/>
                </div>

                <div className="edit-con">
                    <div className="before">邮箱</div>
                    <input type="text" className="input-edit" value={personInfo.mail}/>
                </div>

                <div className="edit-con">
                    <div className="before">手机</div>
                    <input type="text" className="input-edit" value={personInfo.phone}/>
                </div>

                <div className="edit-con">
                    <div className="before">当前密码</div>
                    <input type="password" className="input-edit" />
                </div>

                <div className="edit-con">
                    <div className="before">新密码</div>
                    <input type="password" className="input-edit" />
                </div>

                <div className="sava-btn">保存</div>
            </div>
        )
    }
}

