import React, { useState } from 'react';

import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import { Switch } from 'react-native';

import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UserBalance,
    UserBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UserTickerContainer,
    UserTickerButton,
    UserTickerLabel,
} from './styles';

import creditCard from "../../images/credit-card.png";

export default function Wallet() {

    const [isVisible, setIsVisible] = useState(false);
    const [useBalance, setUseBalance] = useState(false);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }


    return (
        <Wrapper>
            <Header colors={
                useBalance
                    ? ['#52E78C', '#1AB563']
                    : ['#D3D3D3', '#868686']
            }>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>
                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? "eye" : "eye-off"} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={30} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            <UserBalance>
                <UserBalanceTitle>
                    Usar saldo ao pagar
                </UserBalanceTitle>
                <Switch
                    value={useBalance}
                    onValueChange={handleToggleUseBalance} />
            </UserBalance>
            <PaymentMethods>
                <PaymentMethodsTitle>
                    Formas de Pagamentos
                </PaymentMethodsTitle>
                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão de crédito
                        </CardTitle>
                            <CardInfo>
                                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo em seu PicPay.
                        </CardInfo>
                        </CardDetails>
                        <Img souce={creditCard} resizeMode="contain" />
                    </CardBody>
                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                        <AddLabel> Adicionar cartão de crédito </AddLabel>
                    </AddButton>
                </Card>
            </PaymentMethods>
            <UserTickerContainer>
                <UserTickerButton>
                    <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
                    <UserTickerLabel>
                        Usar código promocional
                </UserTickerLabel>
                </UserTickerButton>
            </UserTickerContainer>
        </Wrapper>
    );
}