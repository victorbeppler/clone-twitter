import React from "react";

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage,EditButton } from "./styles";

function ProfilePage() {
    return (
        <Container>
            <Banner>
                <Avatar>
                    
                </Avatar>
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>Victor Hugo</h1>
                <h2>@victorbeppler</h2>
                <h3>GitHub: VictorBeppler</h3>
                <p>
                    Developer at <a href="https://crm7.com.br/">@CRM7</a>
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        Santa Catarina, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 29 de Dezembro de 1999
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong>31</strong>
                    </span>
                    <span>
                        <strong>367 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
            {/* <Feed>

            </Feed> */}
        </Container>
    );
}

export default ProfilePage;
