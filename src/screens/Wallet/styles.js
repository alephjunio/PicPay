import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
    background: #000;
    flex:1;
`;


export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex:1;
    align-items: center;
    justify-content: center;
    `;

export const Title = styled.Text`
    color:#fff;
    font-size: 16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    margin: 10px 0;    
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color:#fff;
    font-size: 38px;
    font-weight: 100;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`

export const Info = styled.Text`
    color:#fff;
    font-size: 14px;
    font-weight: bold;
`;


export const Actions = styled.View`
    flex-direction: row;
    margin-top:40px;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255, 0.6);
    width: 150px;
    height: 45px;
    border-radius: 20px;
    margin: 0 10px;
    `;

export const ActionLabel = styled.Text`
    color:#fff;
    font-size: 16px;
    margin-left: 10px;
`;


export const UserBalance = styled.View`
    background:#1C1C1E;
    flex-direction:row ;
    justify-content:  space-between;
    align-items:center;
    height: 50px;
    padding: 0 16px;
`;
export const UserBalanceTitle = styled.Text`
    color: #fff;
    font-size:16px;
    font-weight: 500;
    `;

export const PaymentMethods = styled.View`
    margin-top: 25px;
    padding: 0 16px;    
`;

export const PaymentMethodsTitle = styled.Text`
    color:#8E8E93;
    text-transform: uppercase;
`;

export const Card = styled.View`
    background: #1E232A;
    padding: 20px;
    border-radius: 8px;
    margin-top: 16px;
`;


export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex:1;
    margin-right: 20px;
`;

export const CardTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    `;

export const CardInfo = styled.Text`
    font-size: 16px;
    color: rgba(255,255,255, 0.8);
    margin-top:15px;
    `;



export const Img = styled.Image``;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items:center;
    margin-top: 30px;
`;

export const AddLabel = styled.Text`
    color: #0DB060;
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
`;

export const UserTickerContainer = styled.View`
align-items: center;
margin-top: 25px;
`;

export const UserTickerButton = styled.TouchableOpacity`
flex-direction:row;
`;

export const UserTickerLabel = styled.Text`
    color: #0DB060;
    font-weight: bold;
    font-size: 16px;
    margin-left: 10px;
    text-decoration: underline;
    `;