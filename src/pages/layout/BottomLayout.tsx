import React from 'react';
import "./BottomLayout.less"
import TankComponent from "../../common/component/TankComponent";
import Preference from "../../common/model/preference/Preference";
import Moon from "../../common/model/global/Moon";
import DefaultLogoPng from '../../assets/image/logo.png';
import Cookies from "js-cookie";
import Sun from "../../common/model/global/Sun";
import Lang from "../../common/model/global/Lang";

interface IProps {

}

interface IState {

}

export default class BottomLayout extends TankComponent <IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  changeLang() {

    if (Lang.getSingleton().lang === 'zh') {
      Lang.getSingleton().lang = 'en'
    } else {
      Lang.getSingleton().lang = 'zh'
    }
    Cookies.set('_lang', Lang.getSingleton().lang);

    Sun.updateFrame()
  }

  render() {

    let that = this

    let preference: Preference = Moon.getSingleton().preference

    return (
      <div className="layout-bottom">
        <span className="item">
          <span dangerouslySetInnerHTML={{__html: preference.copyright}}/>
		</span>
        <span className="item">
          <span dangerouslySetInnerHTML={{__html: preference.record}}/>
		</span>
        <span className="item">
			<span className="link" onClick={this.changeLang.bind(this)}>
        {Lang.getSingleton().lang === 'zh' ? 'English' : '中文'}
      </span>
      </span>
        {/*开源不易，请不要移除掉这里的代码，蓝眼云盘谢谢您 ^_^*/}
        <span className="brand">
			Powered by <a target="_blank" href="https://github.com/eyebluecn/tank">
      <img alt="logo" className="w30" src={DefaultLogoPng}/>
          蓝眼云盘</a>
		</span>
      </div>
    )
  }
}

