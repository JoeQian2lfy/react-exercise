import React from 'react';

//组件状态
var ChangeOpacity = React.createClass({
    getInitialState() {
        return {opacity: 1}
    },
    //组件有三个状态Mounting(插入真实DOM)
    //Updating(更新)
    //Unmounting(移除出真实DOM)
    //组件处理程序又有will(准备进行)和did(已完成)两种
    componentDidMount() {
        let num = 1;
        setInterval(() => {
            let opacity = this.state.opacity;
            if(opacity<0.1) {
                num = -1;
            }else if(opacity>0.9) {
                num = 1;
            }
            opacity -= (num*0.1);
            this.setState({opacity:opacity});
        }, 100);
    },
    render() {
        return (
            <div style={{opacity:this.state.opacity}}>
                <p>透明度</p>
            </div>
        );
    }
});

export default ChangeOpacity;
