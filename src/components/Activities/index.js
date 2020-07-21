import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    Username,
    CardFooter,
    Details,
    Divider,
    Value,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> Pagou a <Bold> @alephjunio </Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <Username>Aleph junio</Username>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value> R$ 20,00 </Value>
                        <Divider />
                        <Feather name="lock" color="#fff" size={14} />
                        <Date> há 2 dias. </Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}