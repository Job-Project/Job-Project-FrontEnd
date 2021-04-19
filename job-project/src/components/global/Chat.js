import * as C from '../../assets/style/global/ChatStyle'
import profile_img from '../../assets/images/common/profile.svg'

const ChatOnOff = (e) => {
    let chatbox = document.getElementById("chatbox");
    if(e.target.id === "off"){
        e.target.id = "on";
        chatbox.style.display = "block"
    } else {
        e.target.id = "off";
        chatbox.style.display = "none"
    }
}

const Chat = () => {
    return(
        <div>
            <C.ChatBtn id="off" onClick={ChatOnOff}></C.ChatBtn>
            <C.ChatBox id="chatbox">
                <C.ChatBoxTitle>
                    <C.CBTitleText>채팅</C.CBTitleText>
                </C.ChatBoxTitle>
                <C.ProfileBox>
                    <C.ProfileImg src={profile_img}></C.ProfileImg>
                    <C.UserName>모두의 멘토</C.UserName>
                </C.ProfileBox>
                <C.ProfileBox>
                    <C.ProfileImg src={profile_img}></C.ProfileImg>
                    <C.UserName>모두의 멘토</C.UserName>
                </C.ProfileBox>
                <C.ProfileBox>
                    <C.ProfileImg src={profile_img}></C.ProfileImg>
                    <C.UserName>모두의 멘토</C.UserName>
                </C.ProfileBox>
                <C.ProfileBox>
                    <C.ProfileImg src={profile_img}></C.ProfileImg>
                    <C.UserName>모두의 멘토</C.UserName>
                </C.ProfileBox>
                <C.ProfileBox>
                    <C.ProfileImg src={profile_img}></C.ProfileImg>
                    <C.UserName>모두의 멘토</C.UserName>
                </C.ProfileBox>
            </C.ChatBox>
        </div>
    )
}

export default Chat;